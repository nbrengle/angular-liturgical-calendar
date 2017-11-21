import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CalendarDay } from '../models/calendar-day.model';
import { Celebration } from '../models/celebration.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LiturgicalCalendarService {
  apiRoot: string;

  constructor(private _http: Http) {
    this.apiRoot = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default';
  }

  getLiturgicalMonth(date: Date): Observable<CalendarDay> {
    const apiURL = `${this.apiRoot}/${date.getFullYear()}/${date.getMonth()}`;
    return this._http.get(apiURL)
      .map(res => {
        // console.log(res.json());
        return res.json().map(item => {
          return new CalendarDay(
            item.date,
            item.season,
            item.seasons_week,
            item.celebrations.map(celeb => {
              return new Celebration(
                celeb.title,
                celeb.rank,
                celeb.rank_number,
                celeb.colour
              );
            }),
            item.weekday
          );
        });
      });
  }


}
