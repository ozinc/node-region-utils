# Region Lock

To use, install into your project with npm:

```
npm install region-lock --save
```


## Utilities

This library processes 2-letter ISO country codes and predefined
collections of these countries, called regions. Each region has
a name, typically an all-caps constant which MUST be longer than
2 letters.

It also defines whitelists and blacklists as an array containing
both country codes and these region constants. A country is matched
if it exists in the whitelist or in any region in the whitelist, but
not in the blacklist.

### matchesRegion(country, whitelist, blacklist)

Returns true if country is in whitelist and not in blacklist.

```javascript
regionLock.matchesRegion('IS')                     // false
regionLock.matchesRegion('IS', ['IS'])             // true
regionLock.matchesRegion('IS', ['GLOBAL'])         // true
regionLock.matchesRegion('IS', ['GLOBAL'], ['IS']) // false
```

### getMatchingCountries(whitelist, blacklist)

Returns all countries which are matched in the whitelist but not in the
blacklist.

```javascript
// Assuming SCANDINAVIA has been defined with `["DK", "NO", "SE"]`.

regionLock.getMatchingCountries(['IS'])                  // ['IS']
regionLock.getMatchingCountries(['SCANDINAVIA'], ['DK']) // ['NO', 'SE']
```

### regions.set(name, countries)

Defines a new region with the specified list of country codes. Can also
be used to override the list of countries for an existing region.

```javascript
regionLock.regions.set('SCANDINAVIA', ['DK', 'NO', 'SE'])
```

### regions.get(name)

Returns a list of country codes belonging to the specified region.

### regions.contains(region, country)

Returns true if the country is in the specified region, otherwise false.

### regions.containing(country)

Returns a list of all regions which include the specified country.

### regions.all()

Returns a hash where keys are region names and values are lists of
country codes.

## License

    The ISC License (MIT)

    Copyright (c) 2020 OZ, inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
