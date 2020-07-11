import {SetBackgroundColor as SetBackgroundColor2} from "./SetBackgroundColor";
export function BackgroundColor(color) {
  return () => {
    SetBackgroundColor2(color);
  };
}
