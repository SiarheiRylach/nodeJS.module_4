const By = require('selenium-webdriver').By;
const LeftBar = require('./menu/left_bar.menu');

class UserPage {
    constructor() {
        this.leftBar = new LeftBar();
        this.writeMessageBtn = By.linkText("Написать сообщение");
        this.txtAreaMsg = By.css("#mail_box_editable");
        this.sendButton = By.css("#mail_box_send");
    };

}

module.exports = UserPage;