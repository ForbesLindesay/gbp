var fs = require('fs');
var test = require('testit');
var seed = require('seed-random');
var gbp = require('../');

var random = seed('whatever');

try {
  fs.mkdirSync(__dirname + '/actual');
} catch (ex) {
  if (ex.code !== 'EEXIST') throw ex;
}

test('small numbers', function () {
  var results = '';
  for (var i = -1000; i < 1000; i++) {
    results += i + ' => ' + gbp(i) + ' or ' + gbp(i, {excludeZeroPennies: true}) + '\n';
  }
  fs.writeFileSync(__dirname + '/actual/small.txt', results);
  var expected = fs.readFileSync(__dirname + '/expected/small.txt', 'utf8');
  if (expected.trim() !== results.trim()) {
    throw new Error('Some results were incorrect');
  }
});

test('random numbers', function () {
  var results = '';
  for (var i = 0; i < 10000; i += 7) {
    var val = (random() * Math.pow(10, 9)) | 0;
    results += val + ' => ' + gbp(val) + ' or ' + gbp(val, {excludeZeroPennies: true}) + '\n';
  }
  fs.writeFileSync(__dirname + '/actual/random.txt', results);
  var expected = fs.readFileSync(__dirname + '/expected/random.txt', 'utf8');
  if (expected.trim() !== results.trim()) {
    throw new Error('Some results were incorrect');
  }
});
