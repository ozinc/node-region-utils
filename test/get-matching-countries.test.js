'use strict';

var assert = require('assert');
var regionUtils = require('./setup');

describe('getMatchingCountries', function() {
  it('returns empty array for no input', function() {
    assert.deepEqual(regionUtils.getMatchingCountries([]), []);
    assert.deepEqual(regionUtils.getMatchingCountries([], []), []);
    assert.deepEqual(regionUtils.getMatchingCountries(), []);
  });

  it('returns whitelisted countries', function() {
    assert.deepEqual(regionUtils.getMatchingCountries(['IS', 'DK']), ['IS', 'DK']);
  });

  it('returns whitelisted countries which are not blacklisted', function() {
    assert.deepEqual(regionUtils.getMatchingCountries(['IS', 'DK'], ['IS']), ['DK']);
  });

  it('explodes whitelisted regions', function() {
    assert.deepEqual(regionUtils.getMatchingCountries(['SCANDINAVIA']), ['DK', 'NO', 'SE']);
  });

  it('explodes blacklisted regions', function() {
    assert.deepEqual(regionUtils.getMatchingCountries(['DK', 'IS'], ['SCANDINAVIA']), ['IS']);
  });
});
