'use strict';

var assert = require('assert');
var regions = require('./setup').regions;

describe('regions.containing', function() {
  it('returns empty array for unknown country', function() {
    assert.deepEqual(regions.containing(['ZZ']), []);
  });

  it('returns global region for most countries', function() {
    var matched = regions.containing(['IS']);
    assert(matched.indexOf('GLOBAL') > -1, 'Iceland wasn\'t in GLOBAL');
  });

  it('returns more regions for other countries', function() {
    var matched = regions.containing(['DK']);
    assert(matched.indexOf('GLOBAL') > -1, 'Denmark wasn\'t in GLOBAL');
    assert(matched.indexOf('SCANDINAVIA') > -1, 'Denmark wasn\'t in SCANDINAVIA');
  });
});
