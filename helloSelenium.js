const webdriver = require('selenium-webdriver');

const driverChrome = new webdriver.Builder()
.forBrowser('chrome')
.build();

driverChrome.get('http://www.globo.com');

