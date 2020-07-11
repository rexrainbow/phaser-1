import {EventInstance as EventInstance2} from "./EventInstance";
export function On(emitter, event, callback, context = emitter, once = false) {
  if (typeof callback !== "function") {
    throw new TypeError("Listener not a function");
  }
  const listener = new EventInstance2(callback, context, once);
  const listeners = emitter.events.get(event);
  if (!listeners) {
    emitter.events.set(event, new Set([listener]));
  } else {
    listeners.add(listener);
  }
  return listener;
}
