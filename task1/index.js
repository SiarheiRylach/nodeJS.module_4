const {Builder, By, until} = require('selenium-webdriver');
const driver = new Builder()
    .forBrowser('chrome')
    .build();

describe('basic test', function () {
    it('should be on correct page', function () {
        driver.get('https://vk.com/');
        driver.getTitle().then(function(title) {
            expect(title).toBe('Добро пожаловать | ВКонтакте');
            done();
        });
    });
});