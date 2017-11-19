import { Celebration } from './celebration.model';

export class CalendarDay {
  date: string;
  season: string;
  season_week: number;
  celebrations: Array<Celebration>;
  weekday: string;

  constructor(
    date: string,
    season: string,
    season_week: number,
    celebrations: Array<Celebration>,
    weekday: string
  ) {
    this.date = date;
    this.season = season;
    this.season_week = season_week;
    this.celebrations = celebrations;
    this.weekday = weekday;
  }
}
