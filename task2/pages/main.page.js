/**
 * Created by Siarhei_Rylach on 10/30/2017.
 */

class MainPage {
    constructor() {
        this.url = "https://protonmail.com/";
        this.openPage = function () {
            return browser.get(this.url);
        };

        this.logInBtn = element(by.linkText("LOG IN"));
        this.signUpBtn = element(by.linkText("SIGN UP"));
        this.createAccountBtn = element(by.linkText("Create Account"));
        this.getAndroidApp = element(by.xpath('//span[text()="Get the Android App"]/parent::a'));
        this.getIOSApp = element(by.xpath('//span[text()="Get the iOS App"]/parent::a'));
        this.useWebVersionBtn = element(by.xpath('//span[text()="Use the Web Version"]/parent::a'));
        this.content = element(by.tagName('body'));
    };

}

module.exports = MainPage;
