// use async - await to handle promises
//
// works ok, but we need to be careful not to forget 'await' when needed
// otherwise it can lead to tricky bugs
const assert = require('assert'),
webdriver = require('selenium-webdriver');
 
describe('Google Search', () => {
  it('should work - async', async () => {
    const driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    await driver.get('http://www.google.com');
    
    const searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    const value = await searchBox.getAttribute('value');
    assert.equal(value, 'simple programmer');
    await driver.quit();
  });
});
