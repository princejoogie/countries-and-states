# countries-and-states

Get list of countries and list of states per country worldwide

## Installation

```bash
yarn add cs-list
# or
npm install cs-list
```

## Types

```ts
type Country = {
  name: string,
  code: string
}

type State = {
  name: string,
  code: string,
  countryCode: string
}
```

## Methods

1. `getCountries() => Country[]`
2. `getStates() => State[]`
3. `getStatesByCode(countryCode: string) => State[]`
4. `getStatesByName(countryName: string) => State[]`

## Usage

1. Get countries list

```ts
import { getCountries } from "cs-list";

const countries = getCountries();
```

2. Get states list

```ts
import { getStates } from "cs-list";

const states = getStates();
```

3. By country code

```ts
import { getStatesByCode } from "cs-list";

const australiaStates = getStatesByCode("AU");
```

4. By country name

```ts
import { getStatesByName } from "cs-list";

const philippineStates = getStatesByName("Philippines");

/** Not case-sensitive
 * const philippineStates = getStatesByName("philPPiNeS") -> WILL WORK;
 */
```

---

Made with ❤️  and ☕ by [Prince Carlo Juguilon](https://princecaarlo.tech/)

