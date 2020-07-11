import {SetRenderer as SetRenderer2} from "../renderer/SetRenderer";
import {WebGLRenderer as WebGLRenderer2} from "../../renderer/webgl1/WebGLRenderer";
export function WebGL() {
  return () => {
    SetRenderer2(WebGLRenderer2);
  };
}
