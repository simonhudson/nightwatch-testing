'use strict';

const { timeout } = require('./config');
const pages = require('./config/pages');

module.exports = {
    'Page loads' : function(browser) {
        for (let page in pages) {
            const url = pages[page].url;
            browser
                .url(url)
                .pause(timeout)
                .waitForElementVisible('body', timeout)
        }
        browser.end();
    }
};
