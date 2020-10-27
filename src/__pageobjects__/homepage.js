import { By } from "selenium-webdriver";
import { findElementBy } from "../utils";

class HomePage {

    get searchInputLocator() {
        return By.css('#searchInput');
    };

    get searchButtonLocator() {
        return By.xpath("//button[@class='pure-button pure-button-primary-progressive']");
    };

    wikiSearch(item) {
        return findElementBy(this.searchInputLocator).sendKeys(item);
    };

    searchButton() {
        return findElementBy(this.searchButtonLocator).click();
    };
}

export default new HomePage();