# inwords

<!-- [![Build Status](https://travis-ci.org/https://github.com/senthiljruby/inWords.png?branch=master)](https://travis-ci.org/https://github.com/senthiljruby/inWords)
[![Code Climate](https://codeclimate.com/github/https://github.com/senthiljruby/inWords/badges/gpa.svg)](https://codeclimate.com/github/https://github.com/senthiljruby/inWords)
[![Test Coverage](https://codeclimate.com/github/https://github.com/senthiljruby/inWords/badges/coverage.svg)](https://codeclimate.com/github/https://github.com/senthiljruby/inWords/coverage) -->
<!-- [![Dependency Status](https://img.shields.io/david/https://github.com/senthiljruby/inWords.svg?style=flat-square)](https://david-dm.org/https://github.com/senthiljruby/inWords) -->
[![Download Status](https://img.shields.io/npm/dm/inwords.svg?style=flat-square)](https://www.npmjs.com/package/@senthiljruby/inwords)

> 

## Installation

```
npm install @senthiljruby/inwords --save
```

## Documentation

Converts the number to word (number system).

Currently it supports Indian and western english, 

TODO
1) Planning to give more supports language like (french, spanish, arabic, ....)
2) Planning to provide support to regional indian language (Tamil, Telugu, Hindi,...)

## Complete Example

Here's an example of a Feathers server that uses `inwords`. 

```js
const feathers = require('@feathersjs/feathers');
const inWords = require('inwords');

// Initialize the application
const app = feathers();

// Initialize the plugin
app.configure(inWords());
```

### Usage ::

```js
app.service('numbersystem').inWords(105000000, 'in') // Indian Way of number to word
>> ten crore fifty lakh
app.service('numbersystem').inWords(105000000) // Western English is default.
>> one hundred five million
```

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
