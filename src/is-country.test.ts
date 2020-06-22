import assert from 'assert';
import regionLock from './setup';

describe('isCountry', () => {
  it('returns true for an existing country code', () => {
    assert(regionLock.isCountry('IS'));
  });

  it('returns false for a non-existent country code', () => {
    assert(!regionLock.isCountry('ZZ'));
  });

  it('returns false for regions', () => {
    assert(!regionLock.isCountry('SCANDINAVIA'));
    assert(!regionLock.isCountry('FAKEREGION'));
  });

});
