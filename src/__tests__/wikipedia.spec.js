import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { driver } from "../driver-factory";
import HomePage from "../__pageobjects__/homepage";
import SeleniumPage from "../__pageobjects__/seleniumpage";

beforeAll(async () => {
    await driver.navigate().to('https://wikipedia.org');
});

afterAll(async () => {
    await driver.quit();
});

describe('Selenium wiki page', () => {
    test('should be opened as successfully', async () => {
        await HomePage.wikiSearch('Selenium (software)');
        await HomePage.searchButton();
        expect(await SeleniumPage.getHeadingText()).toEqual('Selenium (software)');
    });
    test('contains the correct repository URL', async () => {
        expect(await SeleniumPage.getRepositoryUrlText()).toEqual('github.com/SeleniumHQ/');
    });
});