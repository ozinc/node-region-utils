import assert from 'assert';
import regionUtils from './setup';

describe('getMatchingCountries', () => {
  it('returns empty array for no input', () => {
    assert.deepEqual(regionUtils.getMatchingCountries([]), []);
    assert.deepEqual(regionUtils.getMatchingCountries([], []), []);
    assert.deepEqual(regionUtils.getMatchingCountries(), []);
  });

  it('returns whitelisted countries', () => {
    assert.deepEqual(regionUtils.getMatchingCountries(['IS', 'DK']), ['IS', 'DK']);
  });

  it('returns whitelisted countries which are not blacklisted', () => {
    assert.deepEqual(regionUtils.getMatchingCountries(['IS', 'DK'], ['IS']), ['DK']);
  });

  it('explodes whitelisted regions', () => {
    assert.deepEqual(regionUtils.getMatchingCountries(['SCANDINAVIA']), ['DK', 'NO', 'SE']);
  });

  it('explodes blacklisted regions', () => {
    assert.deepEqual(regionUtils.getMatchingCountries(['DK', 'IS'], ['SCANDINAVIA']), ['IS']);
  });
});
