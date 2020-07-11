import {AddTimer as AddTimer2} from "./AddTimer";
export function AddDelayedCall(clock, delay, callback) {
  AddTimer2(clock, {
    duration: 0,
    delay,
    onComplete: callback
  });
}
