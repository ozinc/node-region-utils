import assert from 'assert';
import regionLock from './setup';

describe('matchesRegion', () => {
  it('returns false for no whitelist', () => {
    assert.equal(regionLock.matchesRegion('IS', [], []), false);
    assert.equal(regionLock.matchesRegion('IS', null, null), false);
  });
  it('returns true if country is whitelisted', () => {
    assert.equal(regionLock.matchesRegion('IS', ['IS'], null), true);
    assert.equal(regionLock.matchesRegion('IS', ['US', 'IS'], null), true);
  });
  it('returns false if country is not whitelisted', () => {
    assert.equal(regionLock.matchesRegion('IS', ['US'], null), false);
  });
  it('returns true if region is whitelisted', () => {
    assert.equal(regionLock.matchesRegion('DK', ['SCANDINAVIA'], null), true);
  });
  it('returns false if country is blacklisted', () => {
    assert.equal(regionLock.matchesRegion('IS', ['SCANDINAVIA'], ['IS']), false);
    assert.equal(regionLock.matchesRegion('IS', ['IS'], ['IS']), false);
  });
  it('returns false if region is blacklisted', () => {
    assert.equal(regionLock.matchesRegion('DK', ['GLOBAL'], ['SCANDINAVIA']), false);
  });
});
