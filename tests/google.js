'use strict';

module.exports = {
    'demoTestGoogle' : function (browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('[name=btnK]', 1000)
            .click('[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};
