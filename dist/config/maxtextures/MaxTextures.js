import {SetMaxTextures as SetMaxTextures2} from "./SetMaxTextures";
export function MaxTextures(max = 0) {
  return () => {
    SetMaxTextures2(max);
  };
}
