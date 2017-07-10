import { VipassanaPage } from './app.po';

describe('vipassana App', () => {
  let page: VipassanaPage;

  beforeEach(() => {
    page = new VipassanaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
