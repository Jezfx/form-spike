import { isNotEmpty } from "../../utils";
import { get, flow } from "lodash/fp";

export const getName = get("name");
export const getFollowUp = get("followUp");
export const hasFollowUp = flow([getFollowUp, isNotEmpty]);
