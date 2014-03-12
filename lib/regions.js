'use strict';

var REGIONS = {};
var REGIONS_COUNTRIES = {};

exports.all = function() {
  var regions = {};
  Object.keys(REGIONS).forEach(function(name) {
    regions[name] = exports.get(name);
  });

  return regions;
};

exports.get = function(name) {
  return REGIONS[name] && REGIONS[name].slice();
};

var addRegion = exports.set = function(name, countries) {
  REGIONS[name] = countries.slice();
  var cache = REGIONS_COUNTRIES[name] = {};
  countries.forEach(function(country) {
    cache[country] = true;
  });
};

exports.contains = function(region, country) {
  var countries = REGIONS_COUNTRIES[region];
  return countries ? countries[country] === true : false;
};

exports.containing = function(country) {
  return Object.keys(REGIONS).filter(function(region) {
    return REGIONS_COUNTRIES[region][country];
  });
};


/**
 * Only global region defined for now.
 */
addRegion('GLOBAL', require('country-list')().getCodes());
