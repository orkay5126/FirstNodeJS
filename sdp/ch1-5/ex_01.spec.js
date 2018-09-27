// selenium wrappers around mocha's BDD interface that waits for a promise to 
// resolve before continuing further
const test = require('selenium-webdriver/testing');
// get Selenium!
const webdriver = require('selenium-webdriver');

test.describe('Example 01', () => {
  test.it('Example 01 Test 01', () => {
    // get new instance of the Chrome browser
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    // open the page to test
    driver.get('http://awful-valentine.com');
    
    // find the search input via its id
    const searchInput = driver.findElement(webdriver.By.id('searchinput'));
    // clear the search field
    searchInput.clear();
    // type the text into the search field
    searchInput.sendKeys("cheese");

    // find the submit button via its id and click on it
    driver.findElement(webdriver.By.id('searchsubmit')).click();

    // close the browser
    driver.quit();
  });
});
