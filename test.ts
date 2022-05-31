import { getStatesByCode, getStatesByName } from "./lib";

const test = () => {
  console.log(getStatesByCode("AU"));
  console.log(getStatesByName("Philippines"));
};

test();
