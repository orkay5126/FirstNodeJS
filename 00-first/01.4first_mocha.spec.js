// this works, but had to use await with searchBox.getAttribute !!!???
const assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Search', () => {
  test.it.only('should work - even without async-await', async () => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://www.google.com');
    
    const searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    const value = await searchBox.getAttribute('value');
    assert.equal(value, 'simple programmer');
    driver.quit();
  });
});
