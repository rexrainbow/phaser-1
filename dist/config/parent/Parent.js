import {SetParent as SetParent2} from "./SetParent";
export function Parent(parentElement) {
  return () => {
    SetParent2(parentElement);
  };
}
