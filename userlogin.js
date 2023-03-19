const {Builder, By} = require("selenium-webdriver");

async function example(){
    let driverChrome = await new Builder().forBrowser("chrome").build();
    await driverChrome.get("https://www.saucedemo.com/");
    
    await driverChrome.sleep(1000)

    const campoLogin = await driverChrome.findElement({id:"user-name"})

    const campoSenha = await driverChrome.findElement({id:"password"})

    const botaoLogin = await driverChrome.findElement({id:"login-button"})

    await campoLogin.sendKeys('standard_user')

    await driverChrome.sleep(1000)

    await campoSenha.sendKeys('secret_sauce')

    await driverChrome.sleep(1000)

    await botaoLogin.click()

    
    //const botaoVoltar = await driverChrome.findElement({id:"react-burger-menu-btn"})

    //await botaoVoltar.click()
    

}

example();