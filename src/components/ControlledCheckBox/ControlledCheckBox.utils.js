import { curry, flow, map, toLower, includes } from "lodash/fp";

export const isStringIncludedInArray = curry((currentValues, value) =>
  flow(map(toLower), includes(value))(currentValues)
);
