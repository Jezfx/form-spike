import { isNotEmpty } from "../../../utils";
import { flow, get, isString, isArray, includes, eq } from "lodash/fp";

export const getFollowUp = get("followUp");
export const hasFollowUp = flow([getFollowUp, isNotEmpty]);

const isMatchingString = (condition, value) =>
  isString(value) && eq(condition, value);

const isContainedInArray = (condition, value) =>
  isArray(value) && includes(condition, value);

export const isConditionMet = (condition, value) =>
  isMatchingString(condition, value) || isContainedInArray(condition, value);
