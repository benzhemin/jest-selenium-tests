import { By } from "selenium-webdriver";
import { findElementBy } from "../utils";

class SeleniumPage {

    get headingTextLocator() {
        return By.css('#firstHeading');
    };

    get repositoryUrlLocator() {
        return By.className('plainlist');
    };

    getHeadingText() {
        return findElementBy(this.headingTextLocator).getText();
    };

    getRepositoryUrlText() {
        return findElementBy(this.repositoryUrlLocator).getText();
    };
}

export default new SeleniumPage();