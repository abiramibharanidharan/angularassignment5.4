import { AAssignment55Page } from './app.po';

describe('a-assignment55 App', function() {
  let page: AAssignment55Page;

  beforeEach(() => {
    page = new AAssignment55Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
