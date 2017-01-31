import { JolterPage } from './app.po';

describe('jolter App', function() {
  let page: JolterPage;

  beforeEach(() => {
    page = new JolterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
