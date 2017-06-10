import { MyvoiceappPage } from './app.po';

describe('myvoiceapp App', () => {
  let page: MyvoiceappPage;

  beforeEach(() => {
    page = new MyvoiceappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
