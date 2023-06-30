const {Before, After, AfterAll, AfterStep} = require('@cucumber/cucumber');
const {Builder} = require("selenium-webdriver");
var myglobal = {driver:null,
    expectedSum: '30'};
var { Status} = require('@cucumber/cucumber');
async function openBrowser(){
    myglobal.driver = new Builder().forBrowser('chrome').build();
    return myglobal.driver;
}

async function quitBrowser(){
    await myglobal.driver.close();
}

Before(async function () {
    console.log("inside Before Hook");
    driver = await openBrowser();
});

AfterStep(async function () {
    let world = this;

    return driver.takeScreenshot().then((screenShot) => {
        // screenShot is a base-64 encoded PNG
        world.attach(screenShot, 'image/png');
    });
    
});

After(function(){
    console.log("inside After Hook");
    quitBrowser();
})

module.exports={myglobal}