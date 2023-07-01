'use strict';
const { Given,When,Then } = require("@cucumber/cucumber");
const assert = require('assert');
const { Builder,By, Browser, WebDriver } = require("selenium-webdriver");
var hooks = require('../hooks/hooks.js');
let world = this;
// import { WebDriver } from 'selenium-webdriver';
let title,driver;

// function takeScreenshot(){
//   let world = this;

//   return driver.takeScreenshot().then((screenShot) => {
//       // screenShot is a base-64 encoded PNG
//       world.attach(screenShot, 'image/png');
//   });
// }


  When('visit url {string}',async function (url) {
    driver = hooks.myglobal.driver;
     await driver.get(url);
     hooks.myglobal.message = "Opened the URL: " + url;
  });
 
  When('field with name {string} is present check the box', async function (checkbox) {
      await driver.findElement({ name: checkbox }).then(async function(element){
        element.click();
        hooks.myglobal.message = "Clicked on: " + checkbox + " checkbox";
        // await takeScreenshot();
        // console.log(element.isChecked());
      });
      
  });
 
  When('select the textbox add {string} in the box', async function (text) {
      console.log('Inside TextBox');
      await driver.findElement(By.id("sampletodotext")).click();
      await driver.findElement(By.id("sampletodotext")).sendKeys(text);
      // await takeScreenshot();
      hooks.myglobal.message = "Enetered Text \""+text+"\" in sampletodotext";
      console.log('Enter text in TextBox');
  });
 
  Then('click the {string}', async function (button) {
      await driver.findElement({ id: button}).click();
      hooks.myglobal.message = "Clicked on "+button+" button.";
      // await takeScreenshot();
  });
 
  Then('I must see title {string}', async function (expectedTitle) { 
    
    await driver.getTitle().then(function(title) {
    
    if(title.match(expectedTitle)){
      console.log('Expected title: ' + expectedTitle 
      + ' matches with the Actual title: ' + title);
      hooks.myglobal.message = 'Expected title: ' + expectedTitle 
      + ' matches with the Actual title: ' + title;
    }
    else{
        console.log('Expected title: ' + expectedTitle 
      + ' does not match with the Actual title: ' + title);
      hooks.myglobal.message = 'Expected title: ' + expectedTitle 
      + ' matches with the Actual title: ' + title;
    }
    assert.equal(title, expectedTitle, 'Expected title to be ' + expectedTitle 
      + ' but the Actual title is ' + title);
    });
    // await takeScreenshot();

  });
  