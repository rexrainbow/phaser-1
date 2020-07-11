import {SetDefaultOrigin as SetDefaultOrigin2} from "./SetDefaultOrigin";
export function DefaultOrigin(x = 0.5, y = x) {
  return () => {
    SetDefaultOrigin2(x, y);
  };
}
