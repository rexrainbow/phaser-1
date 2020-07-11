import {CanvasRenderer as CanvasRenderer2} from "../../renderer/canvas/CanvasRenderer";
import {SetRenderer as SetRenderer2} from "../renderer/SetRenderer";
export function Canvas() {
  return () => {
    SetRenderer2(CanvasRenderer2);
  };
}
