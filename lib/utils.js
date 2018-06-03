"use strict";

function isNumber(obj) {
  return obj != null && !isNaN(obj) && toString.call(obj) == '[object Number]';
}

function trim(input, space) {
  if (space === '') {
    return input;
  }

  var trimmer = new RegExp('^' + space + '+|' + space + '+$', 'g');
  return input.replace(trimmer, '');
}

exports.isNumber = isNumber;
exports.trim = trim;
