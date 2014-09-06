# depth

> Returns the depth of a file or directory, e.g. number of folders deep.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i depth --save-dev
```

## Run tests

```bash
npm test
```

## Usage

```js
var depth = require('depth');

console.log(depth('index.js'));
//=> 0
console.log(depth('./node_modules/'));
//=> 1
console.log(depth('./node_modules/verb'));
//=> 2
console.log(depth('./node_modules/verb/index.js'));
//=> 2
```

**fs**

Check the file system first. Useful when dirs have names that start with a dot.

```js
console.log(depth('node_modules/.bin'));
//=> 1

// pass `true` to check the file system
console.log(depth('node_modules/.bin', true));
//=> 2
```

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 Jon Schlinkert, contributors.
Released under the MIT license