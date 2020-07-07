import './NOOP.js';
import { AddTimer } from './AddTimer.js';

function AddDelayedCall(clock, delay, callback) {
    AddTimer(clock, {
        duration: 0,
        delay,
        onComplete: callback
    });
}

export { AddDelayedCall };
