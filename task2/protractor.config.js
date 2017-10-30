"use strict";

exports.config = {
    directConnect: true,
    // Base URL for application server
    baseUrl: 'https://protonmail.com/',
    multiCapabilities: [{
        browserName: 'firefox',
        platform: "Windows 10",
        maxDuration: 10800
    },{
        browserName: 'chrome',
        platform: "Windows 10",
        maxDuration: 1080
    }],
    specs: [
        './tests/*[Ss]pec.js'
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false); //if your app is not angular
        browser.driver.manage().window().maximize(); //full screen mode
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000
};