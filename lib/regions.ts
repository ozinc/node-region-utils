import countryList from "country-list";

export interface Countries {
  [key: string]: boolean
}

const REGIONS: { [key: string]: string[] } = {};
const REGIONS_COUNTRIES: { [key: string]: Countries } = {};

export const all = (): Countries => {
  const regions: Countries = {};
  Object.keys(REGIONS).forEach((name) => {
    regions[name] = exports.get(name);
  });

  return regions;
};

export const get = (name: string): string[] => {
  return REGIONS[name] && REGIONS[name].slice();
};

export const set = (name: string, countries: string[]): void => {
  REGIONS[name] = countries.slice();
  const cache: Countries = (REGIONS_COUNTRIES[name] = {});
  countries.forEach((country) => {
    cache[country] = true;
  });
};

export const contains = (region: string, country: string): boolean => {
  const countries = REGIONS_COUNTRIES[region];
  return countries ? countries[country] === true : false;
};

export const containing = (country: string): string[] => {
  return Object.keys(REGIONS).filter((region) => {
    return REGIONS_COUNTRIES[region][country];
  });
};

/**
 * Only global region defined for now.
 */
set("GLOBAL", countryList().getCodes());

export default {
  all,
  get,
  set,
  contains,
  containing,
};
