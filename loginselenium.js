const { Builder, By } = require("selenium-webdriver");


async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");

    const campoLogin = await driver.findElement(By.id("user-name"))
    const campoPassword = await driver.findElement(By.id("password"))
    const botaoLogin = await driver.findElement(By.id("login-button"))

    await campoLogin.sendKeys('standard_user')
    await campoPassword.sendKeys('secret_sauce')
    await botaoLogin.click()


    const comboFiltro = await driver.findElement(By.className('product_sort_container'))
    const opcaoEscolhida = await comboFiltro.findElement(By.css('.product_sort_container > option:nth-child(4)'))
    await driver.sleep(5000)
    await opcaoEscolhida.click()

}

example();