var assert = require('assert');
var rounding = require("../src/5-cent-rounding");

describe('5 Cent Rouding', function () {

  describe('should return 1.00', function () {
    for (var i = 1.000; i <= 1.024; i += 0.001) {
      testNumber(i.toFixed(3), 1.00);
    }
  });

  describe('should return 1.05', function () {
    for (var i = 1.025; i <= 1.074; i += 0.001) {
      testNumber(i.toFixed(3), 1.05);
    }
  });

  describe('should return 1.10', function () {
    for (var i = 1.075; i <= 1.099; i += 0.001) {
      testNumber(i.toFixed(3), 1.10);
    }
  });
  describe('should return 2.00', function () {
    testNumber(2.000, 2.00);
  });
  describe('should return negative', function () {
    testNumber(-1.001, -1.00);
    testNumber(-1.026, -1.05);
    testNumber(-1.077, -1.10);
    testNumber(-2.000, -2.00);
  });
});

function testNumber(value, expected) {
  it('by ' + value, function () {
    assert.equal(rounding.round5cents(value), expected);
  });
}