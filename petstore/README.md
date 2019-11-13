# petstore

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Fix error mocha webpack test

in package.json
```json
{
    "scripts": {
        "test:mocha": "vue-cli-service test:unit --require tests/setup.js tests/mocha/**/*.spec.js"
    }
}
```

in tests/setup.js
```js
require('jsdom-global')();
global.expect = require('expect');

//Fix
window.Date = Date;
```
See: https://github.com/vuejs/vue-test-utils/issues/936#issuecomment-422792295

More info:<br/>
[vuejs/vue-test-utils#936](https://github.com/vuejs/vue-test-utils/issues/936)<br/>
[vuejs/vue-cli#2128](https://github.com/vuejs/vue-cli/issues/2128)<br/>
[vuejs/vue-cli#2300](https://github.com/vuejs/vue-cli/issues/2300)<br/>
