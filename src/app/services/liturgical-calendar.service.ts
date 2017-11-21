import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CalendarDay } from '../models/calendar-day.model';
import { Celebration } from '../models/celebration.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';



@Injectable()
export class LiturgicalCalendarService {
  apiRoot: string;

  constructor(private _http: Http) {
    this.apiRoot = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default';
  }

  getLiturgicalMonth(dateIn: Date): Observable<CalendarDay> {
    console.log('get Month called');
    const apiURL = `${this.apiRoot}/${dateIn.getFullYear()}/${dateIn.getMonth()}`;
    return this._http.get(apiURL)
      .map(res => {
        // console.log(res.json());
        return res.json().map(item => {
          return new CalendarDay(
            new Date(item.date),
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

  getLiturgicalWeek(dateIn: Date): Observable<CalendarDay> {
   return (dateIn.getDate() < 22) ? this._getNeatWeek(dateIn) : this._getEdgeWeek(dateIn);
  }

  _getProps(object: any) {
    for(var propertyName in object) {
      console.log(propertyName);
      console.log(object[propertyName]);
    }
  }

  _getNeatWeek(dateIn: Date): Observable<CalendarDay> {
    console.log('get Neat called');
    const month = this.getLiturgicalMonth(dateIn);
    this._getProps(month)
    return month
    // .do((val) => console.log(`AFTER MAP: ${this._getProps(val[30])}`))
    // .filter((calends) => calends.date.getTime() >= dateIn.getDay())
    // .filter((calends) => calends.date < new Date(dateIn.getDate() + 7));
  }

  _getEdgeWeek(dateIn: Date): Observable<CalendarDay> {
    console.log('get Edge called');
    return this.getLiturgicalMonth(dateIn)
    .concat(this.getLiturgicalMonth(new Date(dateIn.getMonth() + 1)))
    .filter((calends) => calends.date >= dateIn)
    .filter((calends) => calends.date < new Date(dateIn.getDate() + 7));
  }
}
