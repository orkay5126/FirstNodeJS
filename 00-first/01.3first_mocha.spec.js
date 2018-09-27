// ideal solution - use selenium testing wrappers for mocha interface (describe,
// it, before, after, etc.)
//
// this is perfect, except it does not work!
// searchBox.getAttribute returns promise and for some reason test wrapper does
// not handle it properly
const assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Search', () => {
  test.it('should work - even without async-await', () => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://www.google.com');
    
    const searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    const value = searchBox.getAttribute('value');
    assert.equal(value, 'simple programmer');
    driver.quit();
  });
});
