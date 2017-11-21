import { Component, OnInit } from '@angular/core';
import { LiturgicalCalendarService } from '../services/liturgical-calendar.service';
import { CalendarDay } from 'app/models/calendar-day.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-card-container',
  template: `
  <div class="ui cards">
    <app-day-card
      *ngFor="let day of days | async"
      [calends]=day
    > </app-day-card>
  </div>
  `
})
export class CardContainerComponent implements OnInit {
  today: Date;
  days: Observable<CalendarDay>;
  errorMessage: string;

  constructor(private _liturgicalCalendarService: LiturgicalCalendarService) {
    this.today = new Date();
  }

  ngOnInit() {
    this.days = this.loadDays(this.today);
    console.log(this.days);
  }

  loadDays(date: Date): Observable<CalendarDay> {
    return this._liturgicalCalendarService.getLiturgicalMonth(date);
  }

}
