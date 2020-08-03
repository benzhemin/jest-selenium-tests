import {Builder, By, until} from 'selenium-webdriver'
import {Browser, PageLoadStrategy} from 'selenium-webdriver/lib/capabilities';
import {afterAll, beforeAll, describe, expect, test} from "@jest/globals";
import 'chromedriver';

import chrome from "selenium-webdriver/chrome";

const driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(new chrome.Options()
        .setPageLoadStrategy(PageLoadStrategy.NORMAL)
        .addArguments(['--ignore-certificate-errors', '--disable-extensions', '--disable-popup-blocking', 'enable-automation'])
        .headless())
    .build();

beforeAll(async () => {
    await driver.get('https://wikipedia.org');
});

afterAll(async () => {
    await driver.quit();
});

let searchInputLocator = By.css('#searchInput');
let searchButtonLocator = By.xpath("//button[@class='pure-button pure-button-primary-progressive']");
let headingTextLocator = By.css('#firstHeading');
let repositoryUrlLocator = By.className('plainlist');

const findElementByLocator = async (locator) => {
    const webElement = await driver.wait(until.elementLocated(locator), 20000);
    return driver.wait(until.elementIsVisible(webElement), 20000);
};

describe('Selenium wiki page', () => {

    test('should be opened as successfully', async () => {
        let searchInput = await findElementByLocator(searchInputLocator);
        await searchInput.clear();
        await searchInput.sendKeys('Selenium (software)');

        let searchButton = await findElementByLocator(searchButtonLocator);
        await searchButton.click();

        let headingText = await (await findElementByLocator(headingTextLocator)).getText();

        expect(headingText).toEqual('Selenium (software)');
    }, 10000);

    test('contains the correct repository URL', async () => {
        let repositoryUrl = await (await findElementByLocator(repositoryUrlLocator)).getText();
        expect(repositoryUrl).toEqual('github.com/SeleniumHQ/selenium')
    }, 10000)
});