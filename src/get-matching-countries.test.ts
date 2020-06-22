import assert from 'assert';
import regionLock from './setup';

describe('getMatchingCountries', () => {
  it('returns empty array for no input', () => {
    assert.deepEqual(regionLock.getMatchingCountries([]), []);
    assert.deepEqual(regionLock.getMatchingCountries([], []), []);
    assert.deepEqual(regionLock.getMatchingCountries(), []);
  });

  it('returns whitelisted countries', () => {
    assert.deepEqual(regionLock.getMatchingCountries(['IS', 'DK']), ['IS', 'DK']);
  });

  it('returns whitelisted countries which are not blacklisted', () => {
    assert.deepEqual(regionLock.getMatchingCountries(['IS', 'DK'], ['IS']), ['DK']);
  });

  it('explodes whitelisted regions', () => {
    assert.deepEqual(regionLock.getMatchingCountries(['SCANDINAVIA']), ['DK', 'NO', 'SE']);
  });

  it('explodes blacklisted regions', () => {
    assert.deepEqual(regionLock.getMatchingCountries(['DK', 'IS'], ['SCANDINAVIA']), ['IS']);
  });
});
