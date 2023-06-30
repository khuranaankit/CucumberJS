const {Before, After,Status,AfterStep} = require('@cucumber/cucumber');
const {Builder} = require("selenium-webdriver");
var myglobal = {driver:null,
    expectedSum: '30'};

//Function to open Browser.
async function openBrowser(){
    myglobal.driver = new Builder().forBrowser('chrome').build();
    return myglobal.driver;
}

//Function to quit browser.
async function quitBrowser(){
    await myglobal.driver.close();
}

//Before Hook - will be executed before each test.
Before(async function () {
    console.log("inside Before Hook");
    driver = await openBrowser();
});

//After Step Hook - will be executed after each step and teake the screenshot in case of step failure.
AfterStep(async function (teststep) {
    let world = this;
    if(teststep.result.status === Status.FAILED){
        return driver.takeScreenshot().then((screenShot) => {
            // screenShot is a base-64 encoded PNG
            world.attach(screenShot, 'image/png');
        });
    }
    
    
});

//After Hook - will be executed afte each test case.
After(function(){
    console.log("inside After Hook");
    quitBrowser();
})

module.exports={myglobal}