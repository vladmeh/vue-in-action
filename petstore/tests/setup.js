require('jsdom-global')();
global.expect = require('expect');

//Fix https://github.com/vuejs/vue-test-utils/issues/936#issuecomment-422792295
window.Date = Date;
