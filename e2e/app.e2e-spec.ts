import { LogViewerAppPage } from './app.po';

describe('log-viewer-app App', () => {
  let page: LogViewerAppPage;

  beforeEach(() => {
    page = new LogViewerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
