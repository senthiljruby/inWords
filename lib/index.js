var util = require('./utils');
module.exports = function () {
  return function (app) {
    app.mixins.push(function (service) {
      service.inWords = function (number, language = 'en') {
        let _language = ['en', 'in'];
        if (_language.indexOf(language) > -1) {
          langObj = require('../i18n/' + language + '.json')
        } else {
          throw new Error('Language not found');
        }
        if (!util.isNumber(number)) {
          throw new Error('Input is not a number');
        }
        number = Math.floor(number);
        var returnResp = numberToText(number, langObj);
        return returnResp;
      }
    })
  }
}

function radialBaseConveration(number) {
  var str = number.toString();
  var radPows = langObj.radials || [0, 2, 3, 6, 9];

  var radialBase = [];

  for (var i = 0; i < radPows.length; i++) {
    var _from = i < radPows.length - 1 ? -1 * radPows[i + 1] : 0;
    var _to = -1 * radPows[i] || undefined;
    radialBase.push(str.slice(_from, _to));
  }

  return radialBase;
}

function numberToText(number, langObj) {
  if (langObj.ones[number]) {
    return langObj.ones[number];
  }

  if (number <= 99) {
    var str = number.toString();
    var returnResp = langObj.tens[str[0]];
    if (str[1] !== '0') {
      returnResp = langObj.reverseOnes ? langObj.ones[str[1]] + " " + returnResp : returnResp + " " + langObj.ones[str[1]];
    }
    return util.trim(returnResp, " ");
  }

  var groups = radialBaseConveration(number);
  var output = '';
  for (var i = 0; i < groups.length; i++) {
    var num = parseInt(groups[i], 10);
    if (num > 0) {
      var sep = output ? " " : '';
      var groupName = num > 1 ? numberToText(num, langObj) + " " + langObj.pluralNames[i] : langObj.singularNames[i];
      output = groupName + sep + output;
    }
  }
  return util.trim(output, " ");
}
