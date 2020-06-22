import regions from "./regions";
import countryList from "country-list";

export const matchesRegion = (
  country: string,
  whitelist: null | string[] = [],
  blacklist: null | string[] = []
) => {
  let matches = false;

  for (const region of whitelist || []) {
    if (
      (isCountry(region) && country === region) ||
      regions.contains(region, country)
    ) {
      matches = true;
    }
  }

  for (const region of blacklist || []) {
    if (
      (isCountry(region) && country === region) ||
      regions.contains(region, country)
    ) {
      matches = false;
    }
  }

  return matches;
};

export interface CountrySet {
  [key: string]: boolean;
}

const setUnion = (countrySet: CountrySet, toAdd: string[]) => {
  for (const country of toAdd) {
    countrySet[country] = true;
  }
};

const setSubtract = (countrySet: CountrySet, toRemove: string[]) => {
  for (const country of toRemove) {
    delete countrySet[country];
  }
};

export const getMatchingCountries = (
  whitelist: string[] = [],
  blacklist: string[] = []
) => {
  // Creates a completely empty object (no prototype)
  const countrySet = Object.create(null);

  for (const region of whitelist) {
    setUnion(countrySet, isCountry(region) ? [region] : regions.get(region));
  }

  for (const region of blacklist) {
    setSubtract(countrySet, isCountry(region) ? [region] : regions.get(region));
  }

  return Object.keys(countrySet);
};

const isCountry = (country: string) => {
  return !!countryList().getName(country);
};

const allExports = Object.assign({}, regions, countryList, {
  matchesRegion,
  getMatchingCountries,
  isCountry
});


export default {
  all: regions.all,
  containing: regions.containing,
  contains: regions.contains,
  get: regions.get,
  set: regions.set,
  getName: countryList().getName,
  getCode: countryList().getCode,
  matchesRegion,
  getMatchingCountries,
  isCountry
};