'use strict';

module.exports = function (value, options) {
  if (typeof value !== 'number' && typeof value !== 'string') {
    throw new Error('gbp only accepts integers (or strings that represent integers in decimal notation)');
  }
  if (typeof value === 'number') {
    if (isNaN(value)) {
      throw new Error('Cannot format value that is NaN.  Perhaps you made a typo in one of your calculations?');
    }
    if (value !== (value | 0)) {
      throw new Error('The value must be an int32.  If you are trying to format fractions of pennies, this library will not work.  If you are trying to format very large numbers, you could pass a string.');
    }
  }
  value = '' + value;
  var negative = value[0] === '-';
  if (negative) value = value.substr(1);
  // pad with sufficient zeroes
  while (value.length < 3) {
    value = '0' + value;
  }
  var pounds = value.substr(0, value.length - 2);
  var pennies = value.substr(value.length - 2);

  return (negative ? '-' : '') + '£' + thousandsSeparator(pounds) + (
    (options && options.excludeZeroPennies && pennies === '00')
    ? ''
    : '.' + pennies
  );
}
function thousandsSeparator(value) {
  var result = '';
  for (var i = 0; i < value.length; i++) {
    if (i !== 0 && (value.length - i) % 3 === 0) {
      result += ',';
    }
    result += value[i];
  }
  return result;
}
