/**
 * Created by Siarhei_Rylach on 10/30/2017.
 */
"use strict";

const world = require('../pages/world');
const util = require('../utils/util');

const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;

describe('Page', ()=> {

    afterAll(()=>{
        util.createDir("./screenshot").then(()=>util.createScreenshot());
    });

    it("should has expected title", ()=>{
        world.mainPage.openPage()
            .then(()=> browser.getTitle())
            .then((title)=>expect(title).toBe("Secure email: ProtonMail is free encrypted email."));

    });

    it("should has buttons for log in and sign up", ()=>{
        world.mainPage.logInBtn.getAttribute("href")
            .then((link)=>expect(link).toBe("https://mail.protonmail.com/login"))
            .then(()=>util.highlight(world.mainPage.logInBtn))
            .then(()=> world.mainPage.signUpBtn.getAttribute("href"))
            .then((link)=>expect(link).toBe("https://protonmail.com/signup"))
            .then(()=>util.highlight(world.mainPage.signUpBtn));
    });

    it('should has button "Create account"', ()=> {
        world.mainPage.createAccountBtn.getAttribute("href")
            .then((link)=>expect(link).toBe("https://protonmail.com/signup"));
    });

    it('should has buttons "Get the Android App"', ()=> {
        world.mainPage.getAndroidApp.getAttribute("href")
            .then((link)=>expect(link).toBe("https://play.google.com/store/apps/details?id=ch.protonmail.android"))
            .then(()=>util.highlight(world.mainPage.getAndroidApp));

    });

    it('should has buttons "Get the iOS App"', ()=> {
        world.mainPage.getIOSApp.getAttribute("href")
            .then((link)=>expect(link).toBe("https://itunes.apple.com/app/protonmail-encrypted-email/id979659905"))
            .then(()=>util.highlight(world.mainPage.getIOSApp));
    });

    it('should has buttons "Use the Web Version"', ()=> {
        world.mainPage.useWebVersionBtn.getAttribute("href")
            .then((link)=>expect(link).toBe("https://mail.protonmail.com/login"))
            .then(()=>util.highlight(world.mainPage.useWebVersionBtn));
    });

});