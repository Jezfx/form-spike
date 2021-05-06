import { isNotEmpty } from "../../utils";
import { get, flow } from "lodash/fp";

export const getKey = get("group.key");
export const getFollowUp = get("group.followUp");
export const hasFollowUp = flow([getFollowUp, isNotEmpty]);
