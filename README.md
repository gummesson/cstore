# cstore

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Super tiny, closure-based data store.

## Installation

```
npm install cstore
```

## Usage

``` javascript
const cstore = require('cstore')
const store = cstore()

store.add('foo') // => "foo"
store.add('bar') // => "bar"
store.add('baz') // => "baz"
store()          // => ["foo", "bar", "baz"]

store(0) // => "foo"
store(1) // => "bar"
store(2) // => "baz"

store.remove(2) // => "baz"
store.remove(1) // => "bar"
store()         // => ["foo"]
```

## API

### store = cstore()

Initialize a store.

### store.add(value)

Add the given value.

### store.remove(key)

Remove a value by passing the given key.

### store([key])

Get a value by passing the given key or all values by passing nothing. Aliased
to `store.get`.

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/cstore.svg?style=flat-square
[npm-url]: https://npmjs.com/package/cstore
[license-img]: http://img.shields.io/npm/l/cstore.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/cstore.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/cstore
