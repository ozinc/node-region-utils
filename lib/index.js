'use strict';

var regions = exports.regions = require('./regions.js');

var countryList = exports.countryList = require('country-list')();

exports.matchesRegion = function(country, whitelist, blacklist) {
  whitelist = whitelist || [];
  blacklist = blacklist || [];
  var region,
      i,
      matches = false;

  for (i = 0; i < whitelist.length && !matches; i++) {
    region = whitelist[i];
    if (isCountry(region) && country === region ||
        regions.contains(region, country)) {
      matches = true;
    }
  }

  for (i = 0; i < blacklist.length && matches; i++) {
    region = blacklist[i];
    if (isCountry(region) && country === region ||
      regions.contains(region, country)) {
      matches = false;
    }
  }

  return matches;
};

exports.getMatchingCountries = function(whitelist, blacklist) {
  whitelist = whitelist || [];
  blacklist = blacklist || [];
  // Creates a completely empty object (no prototype)
  var countrySet = Object.create(null),
      i, region;

  for (i = 0; (region = whitelist[i]) != null; i++) {
    setUnion(countrySet, isCountry(region) ? [region] : regions.get(region));
  }

  for (i = 0; (region = blacklist[i]) != null; i++) {
    setSubtract(countrySet, isCountry(region) ? [region] : regions.get(region));
  }

  return Object.keys(countrySet);

  function setUnion(countrySet, toAdd) {
    for (var i = 0; i < toAdd.length; i++) {
      countrySet[toAdd[i]] = true;
    }
  }

  function setSubtract(countrySet, toRemove) {
    for (var i = 0; i < toRemove.length; i++) {
      delete countrySet[toRemove[i]];
    }
  }
};

var isCountry = exports.isCountry = function (country) {
  return !!countryList.getName(country);
}
