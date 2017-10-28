jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("sending message", function() {
  const webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;

  const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  driver.manage().window().maximize();

  it("should open home page", function(done) {
      driver.get('https://vk.com/')
      .then(()=> driver.getTitle())
      .then(title=>{
        expect(title).toBe('Welcome! | VK');
      }).then(()=>{
          done()
      }).then(()=>driver.quit());
  });


});

