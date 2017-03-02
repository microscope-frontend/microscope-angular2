import { StarterPage } from './app.po';

describe('starter App', function() {
  let page: StarterPage;

  beforeEach(() => {
    page = new StarterPage();
  });

  it('should display the name of starter kit', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular starter kit');
  });
});
