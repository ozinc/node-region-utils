'use strict';

var assert = require('assert');
var regionUtils = require('./setup');

describe('matchesRegion', function() {
  it('returns false for no whitelist', function() {
    assert.equal(regionUtils.matchesRegion('IS', [], []), false);
    assert.equal(regionUtils.matchesRegion('IS', null, null), false);
  });
  it('returns true if country is whitelisted', function() {
    assert.equal(regionUtils.matchesRegion('IS', ['IS'], null), true);
    assert.equal(regionUtils.matchesRegion('IS', ['US', 'IS'], null), true);
  });
  it('returns false if country is not whitelisted', function() {
    assert.equal(regionUtils.matchesRegion('IS', ['US'], null), false);
  });
  it('returns true if region is whitelisted', function() {
    assert.equal(regionUtils.matchesRegion('DK', ['SCANDINAVIA'], null), true);
  });
  it('returns false if country is blacklisted', function() {
    assert.equal(regionUtils.matchesRegion('IS', ['SCANDINAVIA'], ['IS']), false);
    assert.equal(regionUtils.matchesRegion('IS', ['IS'], ['IS']), false);
  });
  it('returns false if region is blacklisted', function() {
    assert.equal(regionUtils.matchesRegion('DK', ['GLOBAL'], ['SCANDINAVIA']), false);
  });
});
