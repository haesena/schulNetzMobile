import { SchulNetzMobilePage } from './app.po';

describe('schul-netz-mobile App', () => {
  let page: SchulNetzMobilePage;

  beforeEach(() => {
    page = new SchulNetzMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
