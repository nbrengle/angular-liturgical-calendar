import { LitugricalCalendarPage } from './app.po';

describe('angular-liturgical-calendar App', () => {
  let page: LiturgicalCalendarPage;

  beforeEach(() => {
    page = new LiturgicalCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
