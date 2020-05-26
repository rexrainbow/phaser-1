import { NOOP } from './time/NOOP.js';
import { AddTimer } from './time/AddTimer.js';
import { AddDelayedCall } from './time/AddDelayedCall.js';
import { Clock } from './time/Clock.js';

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AddDelayedCall: AddDelayedCall,
    AddTimer: AddTimer,
    Clock: Clock,
    NOOP: NOOP
});

export { index as i };
