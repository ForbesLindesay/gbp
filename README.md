# gbp

[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/gbp.svg)](https://greenkeeper.io/)

Convert a number in pennies into a string formatted for british pounds

[![Build Status](https://img.shields.io/travis/ForbesLindesay/gbp/master.svg)](https://travis-ci.org/ForbesLindesay/gbp)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/gbp.svg)](https://david-dm.org/ForbesLindesay/gbp)
[![NPM version](https://img.shields.io/npm/v/gbp.svg)](https://www.npmjs.org/package/gbp)

## Installation

    npm install gbp

## Usage

```js
var gbp = require('gbp');

gbp(1376446);
// => '£13,764.46'

gbp(-1376446)
// => '-£13,764.46'
```

## License

  MIT
