import assert from 'assert';
import regionUtils from './setup';

describe('isCountry', () => {
  it('returns true for an existing country code', () => {
    assert(regionUtils.isCountry('IS'));
  });

  it('returns false for a non-existent country code', () => {
    assert(!regionUtils.isCountry('ZZ'));
  });

  it('returns false for regions', () => {
    assert(!regionUtils.isCountry('SCANDINAVIA'));
    assert(!regionUtils.isCountry('FAKEREGION'));
  });

});
