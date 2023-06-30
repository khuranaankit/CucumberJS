const { Given,When,Then } = require("@cucumber/cucumber");
const assert = require('assert')
let x,y,sum;

var global = require('../hooks/hooks.js')

Given('first number is {int} and second number is {int}', function (int, int2) {
      x= int;
      y=int2;
    });


    When('user executes sum function', function () {
      // Write code here that turns the phrase above into concrete actions
      sum=x+y;
    });

    Then('the sum is equal to expectedSum', function () {
    // Then('the sum is {float}', function (float) {
      // Write code here that turns the phrase above into concrete actions
      
      console.log(x+"+"+y+"="+sum);
      
      assert.equal(sum,global.myglobal.expectedSum,
        "Actual sum: " +sum + " does not match with the expected sum: " + global.myglobal.expectedSum);
      
      console.log("Actual sum: " +sum + " matches with the expected sum: " + global.myglobal.expectedSum)
    });