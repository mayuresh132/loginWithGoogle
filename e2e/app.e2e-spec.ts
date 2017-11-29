import { MessWebAppPage } from './app.po';

describe('mess-web-app App', () => {
  let page: MessWebAppPage;

  beforeEach(() => {
    page = new MessWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
