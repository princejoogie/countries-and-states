import states from "./states.json";
import fs from "fs";

interface IState {
  countryCode: string;
  name: string;
  code: string;
}

interface ICountry {
  name: string;
  code: string;
}

const main = () => {
  const statesObj: Record<string, IState> = {};
  const countriesObj: Record<string, ICountry> = {};

  for (const state of states) {
    const newState: IState = {
      countryCode: state.country_code,
      name: state.name,
      code: state.state_code,
    };

    const key = `${state.state_code}-${state.country_code}`;

    if (!statesObj[key]) {
      statesObj[key] = newState;
    }

    const newCountry: ICountry = {
      name: state.country_name,
      code: state.country_code,
    };

    if (!countriesObj[state.country_code]) {
      countriesObj[state.country_code] = newCountry;
    }
  }

  const newStates = Object.values(statesObj);
  const newCountries = Object.values(countriesObj);

  console.log(newStates[0]);
  console.log(newCountries[0]);

  console.log({
    statesLength: newStates.length,
    countriesLength: newCountries.length,
  });

  fs.writeFile(
    `${__dirname}/lib/states.ts`,
    `export const states = ${JSON.stringify(newStates)} as const;`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  fs.writeFile(
    `${__dirname}/lib/countries.ts`,
    `export const countries = ${JSON.stringify(newCountries)} as const;`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
};

main();
