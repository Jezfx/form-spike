import { get, flow } from "lodash/fp";
import { isNotEmpty } from "../utils";

export const getKey = get("group.key");
export const getFollowUp = get("group.followUp");
export const hasFollowUp = flow([getFollowUp, isNotEmpty]);
