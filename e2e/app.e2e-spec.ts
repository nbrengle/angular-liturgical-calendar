import { AngularMiscComponentsPage } from './app.po';

describe('angular-misc-components App', () => {
  let page: AngularMiscComponentsPage;

  beforeEach(() => {
    page = new AngularMiscComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
