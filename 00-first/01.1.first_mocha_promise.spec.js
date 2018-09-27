// use resolve and reject calls to handle promises
//
// works ok, but the syntax is 'ugly', too many identations.
// also have ot be careful to call 'done' properly
const assert = require('assert'),
webdriver = require('selenium-webdriver');
 
describe('Google Search', function() {
  it.only('should work - promise', function(done) {
    const driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    driver.get('http://www.google.com').then(
      () => {
        const searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('simple programmer');
        searchBox.getAttribute('value').then(
          (value) => {
            assert.equal(value, 'simple programmer');
            driver.quit().then(
              () => {
                done();
              },
              (err) => {
                done(err);
              }
            );
          },
          (err) => {
            done(err);
          }
        );
      },
      (err) => {
        done(err);
      }
    );
  });
});
