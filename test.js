/*!
 * depth <https://github.com/jonschlinkert/depth>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var depth = require('./');

describe('depth', function () {
  it('should calculate the depth of a directory.', function () {
    depth('./').should.equal(0);
    depth('.').should.equal(0);
    depth('').should.equal(0);
    depth('./node_modules').should.equal(1);
    depth('node_modules/').should.equal(1);
    depth('/node_modules/').should.equal(1);
    depth('//node_modules/').should.equal(1);
    depth('./node_modules/').should.equal(1);
    depth('./node_modules/mocha').should.equal(2);
    depth('./node_modules/mocha/lib').should.equal(3);
    depth('./node_modules/mocha/lib/browser').should.equal(4);
  });

  it('should calculate the depth of a file.', function () {
    depth('index.js').should.equal(0);
    depth('//index.js').should.equal(0);
    depth('./index.js').should.equal(0);
    depth('./node_modules/mocha/index.js').should.equal(2);
    depth('./node_modules/mocha/lib/context.js').should.equal(3);
    depth('./node_modules/mocha/lib/browser/debug.js').should.equal(4);
  });
});
