/*!
 * depth <https://github.com/jonschlinkert/depth>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function (dir) {
  dir = dir.replace(/^\.[\\\/]+/g, '');
  var segments = dir.split(/^\.|[\\\/]/).filter(Boolean);

  var isFile = /\./.test(segments[segments.length - 1]);
  if (isFile) {
    return segments.length - 1;
  }
  return segments.length;
};

