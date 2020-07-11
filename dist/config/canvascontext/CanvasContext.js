import {SetCanvasContext as SetCanvasContext2} from "./SetCanvasContext";
export function CanvasContext(contextAttributes) {
  return () => {
    SetCanvasContext2(contextAttributes);
  };
}
