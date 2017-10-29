const By = require('selenium-webdriver').By;

class GuestPage {
    constructor() {
        this.url = "https://vk.com/";
        this.login = By.id("index_email");
        this.password = By.id('index_pass');
        this.signInBtn = By.id('index_login_button');
    };

}

module.exports = GuestPage;