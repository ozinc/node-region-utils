'use strict';

import assert from 'assert';
import regions from './setup';

describe('regions.containing', () => {
  it('returns empty array for unknown country', () => {
    assert.deepEqual(regions.containing('ZZ'), []);
  });

  it('returns global region for most countries', () => {
    const matched = regions.containing('IS');
    assert(matched.indexOf('GLOBAL') > -1, 'Iceland wasn\'t in GLOBAL');
  });

  it('returns more regions for other countries', () => {
    const matched = regions.containing('DK');
    assert(matched.indexOf('GLOBAL') > -1, 'Denmark wasn\'t in GLOBAL');
    assert(matched.indexOf('SCANDINAVIA') > -1, 'Denmark wasn\'t in SCANDINAVIA');
  });
});
