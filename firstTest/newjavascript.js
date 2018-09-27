var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://google.com');
driver.findElement(By.id('login_login_username')).sendKeys('Testing');
driver.findElement(By.id('login_login_password')).sendKeys('Optum@511');
driver.findElement(By.id('login_submit')).click();

driver.findElement(By.linkText('Settings')).then(function(element) {
  console.log('Yes, found the element');
}, function(error) {
  console.log('The element was not found, as expected');
});
driver.quit();

