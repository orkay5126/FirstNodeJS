const assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe.skip('Test Purchase Form', () => {


  test.it('Verify Fillout Purchase Form', async () => {
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
