# ini-webpack-plugin

> ini file writer plugin for Webpack.

write an object of data to an ini file to be included in back end services
## Setup

```js
npm i -D ini-webpack-plugin
```

## Example

```js
...
const IniWebpackPlugin = require("ini-webpack-plugin");

const iniPlugin = new IniWebpackPlugin(options);

module.exports = {
  ...
  plugins: [
    iniPlugin
  ]
};
```

## Options:

options and default values:

* path:      './'
* hashValue: 'hash'
* filename:  'build.ini'
* values:     { 'hash' : bundleHash }
