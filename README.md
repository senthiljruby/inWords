# inwords

[![Total Download Status](https://img.shields.io/npm/dt/@senthiljruby/inwords.svg?style=flat-square)](https://www.npmjs.com/package/@senthiljruby/inwords)

> 

## Installation

```
npm install @senthiljruby/inwords --save
```

## Documentation

Converts the number to word (number system).

Currently it supports Indian and western english, 

### TODO

1) Planning to give more supports language like (french, spanish, arabic, ....)
2) Planning to provide support to regional indian language (Tamil, Telugu, Hindi,...)

## Complete Example

Here's an example of a Feathers server that uses `@senthiljruby/inwords`. 

```js
const feathers = require('@feathersjs/feathers');
const inWords = require('@senthiljruby/inwords');

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

Author
