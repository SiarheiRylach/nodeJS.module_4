const webdriver = require('selenium-webdriver');

class LeftMenu {
    constructor() {
        this.friends = webdriver.By.css("#l_fr>a");
    };

}

module.exports = LeftMenu;