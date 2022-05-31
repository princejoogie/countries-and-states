# countries-and-states

Get list of countries and list of states per country worldwide

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
import { getCountries } from "./lib";

const countries = getCountries();
```

2. Get states list

```ts
import { getStates } from "./lib";

const states = getStates();
```

3. By country code

```ts
import { getStatesByCode } from "./lib";

const australiaStates = getStatesByCode("AU");
```

4. By country name

```ts
import { getStatesByName } from "./lib";

const philippineStates = getStatesByName("Philippines");

/** Not case-sensitive
 * const philippineStates = getStatesByName("philPPiNeS") -> WILL WORK;
 */
```

---

Made with ❤️  and ☕ by [Prince Carlo Juguilon](https://princecaarlo.tech/)

