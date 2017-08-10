import { browser, $, $$ } from 'protractor';
const fs = require('fs');

describe('Synios', () => {
  beforeAll(() => (browser.ignoreSynchronization = true));

  function writeScreenShot(data, filename) {
    const stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  it('should display the Impressum headline', () => {
    browser.get('http://www.synios.de/metainfo/impressum.php');
    const heading = $('.column1 h3');
    browser.takeScreenshot().then(png => writeScreenShot(png, 'impressum.png'));

    expect(heading.getText()).toEqual('Impressum');
  });

  it('should show the current CEO', () => {
    browser.get('http://www.synios.de/metainfo/impressum.php');
    const tableRows = $$('.column1 table tbody tr');
    const ceoCell = tableRows.get(1).$$('td').get(2).getText();

    expect(ceoCell).toContain('André Wolter');
    expect(ceoCell).not.toContain('Max Mustermann');

  });

  afterAll(() => (browser.ignoreSynchronization = false));
});
