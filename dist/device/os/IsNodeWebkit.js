import {IsNode as IsNode2} from "./IsNode";
export function IsNodeWebkit() {
  return IsNode2() && !!process.versions.hasOwnProperty("node-webkit");
}
