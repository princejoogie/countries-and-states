import { states } from "./states";
import { countries } from "./countries";

export type Country = typeof countries[number];
export type State = typeof states[number];

export const getCountries = () => [...countries];
export const getStates = () => [...states];

export const getStatesByCode = (countryCode: string) =>
  states.filter((state) => state.countryCode === countryCode);

export const getStatesByName = (countryName: string) => {
  const country = countries.find(
    (country) => country.name.toUpperCase() === countryName.toUpperCase()
  );
  if (country) return getStatesByCode(country.code);
  return null;
};
