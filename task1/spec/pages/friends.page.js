const By = require('selenium-webdriver').By;
const LeftBar = require('./menu/left_bar.menu');

class FriendsPage {
    constructor() {
        this.leftBar = new LeftBar();
        this.nameTestFriend = By.linkText("Сергей Рылач"); // name of user on vk.com in list of friends
    };

}

module.exports = FriendsPage;