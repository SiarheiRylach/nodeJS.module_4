describe("sending message", function() {
  const webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;

  const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();

  it("should open home page", function() {
      driver.get('https://vk.com/').then(()=>{
      return driver.getTitle().then(title=>{
        expect(title).toBe('Добро пожаловать | ВКонтакте');
        //done();
      });
    });

  });

    it("should be possible to resume", function() {

    });
});

