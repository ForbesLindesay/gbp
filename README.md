# gbp

Convert a number in pennies into a string formatted for british pounds

[![Build Status](https://img.shields.io/travis/ForbesLindesay/gbp/master.svg)](https://travis-ci.org/ForbesLindesay/gbp)
[![Dependency Status](https://img.shields.io/gemnasium/ForbesLindesay/gbp.svg)](https://gemnasium.com/ForbesLindesay/gbp)
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
