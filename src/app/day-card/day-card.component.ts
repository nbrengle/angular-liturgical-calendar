import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CalendarDay } from '../models/calendar-day.model';
import { Celebration } from '../models/celebration.model';


@Component({
  selector: 'app-day-card',
  template: `
  <div class="ui card">
    <div class="content">
      Date: {{ cleanDate(calends.date) }}
      Season: {{ calends.season }}
      Season Week: {{ calends.season_week }}
      Weekday: {{ calends.weekday }}
    </div>
    <div
      *ngFor="let celebration of calends.celebrations"
      class="{{ celebration.colour }} content"
    >
      {{ celebration.title }} : {{ celebration.rank }}, {{ celebration.rank_number }}
    </div>
  </div>
  `
})
export class DayCardComponent implements OnInit {
  @Input() calends: CalendarDay;

  constructor() { }

  ngOnInit() {
    console.log(typeof this.calends);
  }

  cleanDate(dateIn: Date): string {
    return dateIn.toISOString().split('T')[0];
  }

}
