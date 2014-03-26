'use strict';

var assert = require('assert');
var regionUtils = require('./setup');

describe('isCountry', function() {
  it('returns true for an existing country code', function () {
    assert(regionUtils.isCountry('IS'));
  });

  it('returns false for a non-existent country code', function () {
    assert(!regionUtils.isCountry('ZZ'));
  });

  it('returns false for regions', function () {
    assert(!regionUtils.isCountry('SCANDINAVIA'));
    assert(!regionUtils.isCountry('FAKEREGION'));
  });

});
