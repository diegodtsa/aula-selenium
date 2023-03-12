const {Builder, By} = require("selenium-webdriver");

async function example(){
    let driverChrome = await new Builder().forBrowser("chrome").build();
    await driverChrome.get("http://www.duckduckgo.com");
    
    const campoPesquisa = await driverChrome.findElement({id:"search_form_input_homepage"})
    const botaoPesquisar = await driverChrome.findElement({id:"search_button_homepage"})
    await campoPesquisa.sendKeys('Flexpeak')
    await botaoPesquisar.click()
}

example();