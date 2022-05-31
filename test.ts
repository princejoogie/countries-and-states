import { getStatesByCode, getStatesByName } from "./lib/dist";

const test = () => {
  console.log(getStatesByCode("AU"));
  console.log(getStatesByName("Philippines"));
};

test();
