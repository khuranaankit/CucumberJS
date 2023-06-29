'use strict';
const { Given,When,Then } = require("@cucumber/cucumber");
const assert = require('assert');
const { Builder,By } = require("selenium-webdriver");
let title;
let driver = new Builder().forBrowser('chrome').build();

  When('visit url {string}',async function (url) {
     await driver.get(url);
  });
 
  When('field with name {string} is present check the box', function (checkbox) {
      driver.findElement({ name: checkbox })
      .click();
  });
 
  When('select the textbox add {string} in the box', function (text) {
      console.log('Inside TextBox');
      driver.findElement(By.id("sampletodotext")).click();
      driver.findElement(By.id("sampletodotext")).sendKeys(text);
      console.log('Enter text in TextBox');
  });
 
  Then('click the {string}', function (button) {
      driver.findElement({ id: button}).click();
  });
 
  Then('I must see title {string}', async function (expectedTitle) {  
    driver.getTitle()
    .then(function(title) {
      assert.equal(title, expectedTitle, 'Expected title to be ' + expectedTitle 
      + ' but the Actual title is ' + title);
    });
    driver.close();
  });