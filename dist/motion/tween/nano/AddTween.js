import {NanoTween as NanoTween2} from "./NanoTween";
export function AddTween(target, emitter = null, autoStart = true) {
  return new NanoTween2(target, emitter, autoStart);
}
