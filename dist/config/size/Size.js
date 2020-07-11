import {SetSize as SetSize2} from "./SetSize";
export function Size(width = 800, height = 600, resolution = 1) {
  return () => {
    SetSize2(width, height, resolution);
  };
}
