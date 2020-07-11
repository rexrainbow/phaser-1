import {SetWebGLContext as SetWebGLContext2} from "./SetWebGLContext";
export function WebGLContext(contextAttributes) {
  return () => {
    SetWebGLContext2(contextAttributes);
  };
}
