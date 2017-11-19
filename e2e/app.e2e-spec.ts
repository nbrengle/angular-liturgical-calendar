import { AngularMiscComponentsPage } from './app.po';

describe('angular-liturgical-calendar App', () => {
  let page: AngularMiscComponentsPage;

  beforeEach(() => {
    page = new AngularMiscComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
