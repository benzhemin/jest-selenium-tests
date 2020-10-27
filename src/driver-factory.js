import { Builder } from "selenium-webdriver";
import { Browser, PageLoadStrategy } from "selenium-webdriver/lib/capabilities";
import chrome from "selenium-webdriver/chrome";
import 'chromedriver';

const getChromeDriver = () => {
    return new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(new chrome.Options()
            .setPageLoadStrategy(PageLoadStrategy.NORMAL)
            .addArguments(['--ignore-certificate-errors', '--disable-extensions', '--disable-popup-blocking', 'enable-automation'])
            .headless())
        .build();
}

export const driver = getChromeDriver();