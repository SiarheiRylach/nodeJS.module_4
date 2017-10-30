/**
 * Created by Siarhei_Rylach on 10/30/2017.
 */

const MainPage =require('./main.page.js');

class World{
    constructor(){
        this.mainPage = new MainPage();
    }
}

module.exports = new World();