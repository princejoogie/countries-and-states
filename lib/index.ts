import { states } from "./states";
import { countries } from "./countries";

export type Country = typeof countries[number];
export type State = typeof states[number];

export const getCountries = () => countries;

export const getStatesByCode = (
  countryCode: typeof countries[number]["code"]
) => states.filter((state) => state.countryCode === countryCode);

export const getStatesByName = (countryName: string) => {
  const code = countries.find(
    (country) => country.name.toUpperCase() === countryName.toUpperCase()
  )?.code;

  if (code) return getStatesByCode(code);
  return null;
};
