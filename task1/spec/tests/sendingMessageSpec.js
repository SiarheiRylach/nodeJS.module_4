"use strict";

const world = require('../pages/world');
const webdriver = require('selenium-webdriver'),
    until = webdriver.until;

const login = "login";
const password = "password";

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.manage().window().maximize();


describe('Scenario "Sending message":', ()=> {

  afterAll(()=>{
      driver.quit();
  });

  beforeEach(()=>{
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  });


  it("should open home page", (done)=>{
      driver.get(world.guestPage.url)
      .then( ()=> driver.getTitle() )
      .then( title=>expect(title).toBe('Welcome! | VK') )
      .then( ()=>done() );
  });

  it("should login", (done)=>{
      driver.wait(until.elementLocated(world.guestPage.login))
      .then( ()=>driver.findElement(world.guestPage.login).sendKeys(login) )
      .then( ()=>driver.findElement(world.guestPage.password).sendKeys(password) )
      .then( ()=>driver.findElement(world.guestPage.signInBtn).click() )
      .then( ()=>done() );
  });

  it("go to list of friends", (done)=>{
      driver.wait(until.elementLocated(world.feedPage.leftBar.friends))
      .then(()=> driver.findElement(world.feedPage.leftBar.friends).click())
      .then( ()=>done() );
  });

  it("go to profile recipient", (done)=>{
    driver.wait(until.elementLocated(world.friendsPage.nameTestFriend))
    .then(()=>driver.findElement(world.friendsPage.nameTestFriend).click())
    .then( ()=>done() );
  });

  it("send message", (done)=>{
    driver.wait(until.elementLocated(world.userPage.writeMessageBtn))
    .then( ()=>driver.findElement(world.userPage.writeMessageBtn).click() )
    .then( ()=> driver.wait(until.elementLocated(world.userPage.txtAreaMsg)) )
    .then( ()=> driver.findElement(world.userPage.txtAreaMsg).sendKeys("Привет, как дела?") )
    .then( ()=> driver.findElement(world.userPage.sendButton).click() )
    .then( ()=>done() );
  });
});

