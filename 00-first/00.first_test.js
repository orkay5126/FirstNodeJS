var assert = require('assert'); 

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
    
   

//var driver = new webdriver.Builder()
//    .forBrowser('chrome')
//    .build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
driver.findElement(webdriver.By.name('btnK')).click();
//var actualTitle = driver.getTitle();
driver.getTitle().then(function(title) {
   assert.equal(title, "simple programmer - Google Search");
});

//assert(driver.getTitle().equals("simple programmer Google Search"));
driver.quit();

//driver.findElement(By.linkText('Settings')).then(function(element) {
//  console.log('Yes, found the element');
//}, function(error) {
//  console.log('The element was not found, as expected');
//});
//driver.quit();

