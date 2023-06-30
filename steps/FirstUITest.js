'use strict';
const { Given,When,Then } = require("@cucumber/cucumber");
const assert = require('assert');
const { Builder,By } = require("selenium-webdriver");
let title;
let driver = new Builder().forBrowser('chrome').build();

  When('visit url {string}',async function (url) {
     await driver.get(url);

  });
 
  When('field with name {string} is present check the box', async function (checkbox) {
      await driver.findElement({ name: checkbox }).then(function(element){
        element.click();
        // console.log(element.isChecked());
      });
      
  });
 
  When('select the textbox add {string} in the box', async function (text) {
      console.log('Inside TextBox');
      await driver.findElement(By.id("sampletodotext")).click();
      await driver.findElement(By.id("sampletodotext")).sendKeys(text);
      console.log('Enter text in TextBox');
  });
 
  Then('click the {string}', async function (button) {
      await driver.findElement({ id: button}).click();
  });
 
  Then('I must see title {string}', async function (expectedTitle) { 
    
    await driver.getTitle().then(function(title) {
    
    if(title.match(expectedTitle)){
      console.log('Expected title: ' + expectedTitle 
      + ' matches with the Actual title: ' + title);
    }
    else{
        console.log('Expected title: ' + expectedTitle 
      + ' does not match with the Actual title: ' + title);
      assert.equal(title, expectedTitle, 'Expected title to be ' + expectedTitle 
      + ' but the Actual title is ' + title);
    }
    });
  });