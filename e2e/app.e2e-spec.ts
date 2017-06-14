import { AngularUnderstandingViewcontainerrefPage } from './app.po';

describe('angular-understanding-viewcontainerref App', () => {
  let page: AngularUnderstandingViewcontainerrefPage;

  beforeEach(() => {
    page = new AngularUnderstandingViewcontainerrefPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
