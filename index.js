const { build, By, Key, until, Builder, Options } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const id_pass = require("./id_pass");

const id = 'trackingitest@gmail.com';
const pass = 'trackingi';
const url = "https://www.hancomdocs.com/";

// const documentInitialised = () =>
//     driver.executeScript('return initialised');

const run = async () => {
  
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().addArguments("--disable-gpu", "excludeSwitches", ["enable-logging"]))
    .build();

  await driver.get(url);
  await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/header/div/div/div/div[2]/button[1]')).click();
  await driver.manage().setTimeouts({implicit: 1000});
  await driver.findElement(By.xpath('//*[@id="root"]/div[2]/main/article/div[1]/button[1]')).click();
  await driver.findElement(By.xpath('//*[@id="identifierId"]')).sendKeys(id);
  await driver.findElement(By.xpath('//*[@id="identifierNext"]/div/button')).click();


};

run();
