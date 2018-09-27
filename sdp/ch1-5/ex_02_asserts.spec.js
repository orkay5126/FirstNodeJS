// selenium wrappers around mocha's BDD interface that waits for a promise to 
// resolve before continuing further
const test = require('selenium-webdriver/testing');
// get Selenium!
const webdriver = require('selenium-webdriver');
// assert library
const assert = require('assert');

test.describe('Example 02 Asserts', () => {
  test.it.only('Verify Search with No Results Found', async () => {
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

    // find the element which class name is 'entry' and get its text
    // NOTE: for some reason have to use 'await'
    const entry = await driver.findElement(webdriver.By.className('entry')).getText();

    // verify that text of the 'entry' field contains text 'No Results Found'
    assert(entry.includes('No Results Found'));

    // close the browser
    driver.quit();
  });
});
