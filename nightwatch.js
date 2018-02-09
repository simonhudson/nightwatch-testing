'use strict';

require('nightwatch/bin/runner.js');
const chromedriver = require('chromedriver');

module.exports = {

    before : function(done) {
        chromedriver.start();
    },

    after : function(done) {
        chromedriver.stop();
        done();
    }
    
};
