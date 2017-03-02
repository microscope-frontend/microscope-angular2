import { browser, element, by } from 'protractor';

export class StarterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.lead')).getText();
  }
}
