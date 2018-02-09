'use strict';

const { timeout } = require('./config');
const pages = require('./config/pages');

const expected = {
    home: 'Home page',
    about: 'About us'
};

module.exports = {
    'Page loads' : function(browser) {
        for (let page in pages) {
            const url = pages[page].url;
            const expectedValue = expected[page];
            browser
                .url(url)
                .pause(timeout)
                .waitForElementVisible('h1', timeout)
                .getText('h1', function(result) {
                    browser.assert.equal(result.value, expectedValue, `<h1> has expected text ("${expectedValue}")`)
                });
        }
        browser.end();
    }
};
