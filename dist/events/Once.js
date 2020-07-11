import {On as On2} from "./On";
export function Once(emitter, event, callback, context = emitter) {
  return On2(emitter, event, callback, context, true);
}
