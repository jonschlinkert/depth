/*!
 * depth <https://github.com/jonschlinkert/depth>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var path = require('path');
var isDir = require('is-directory');

'use strict';

module.exports = function (dir, fs) {
  dir = dir.replace(/^\.[\\\/]+/g, '');
  var segments = dir.split(/^\.|[\\\/]/).filter(Boolean);

  var isFile = /\./.test(segments[segments.length - 1]);
  if (fs) {
    isFile = !isDir(path.join(process.cwd(), dir));
  }

  if (isFile) {
    return segments.length - 1;
  }
  return segments.length;
};

