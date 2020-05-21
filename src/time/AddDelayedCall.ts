import { AddTimer } from './AddTimer';
import { Clock } from './Clock';

export function AddDelayedCall (clock: Clock, delay: number, callback: () => void): void
{
    AddTimer(clock,
        {
            duration: 0,
            delay,
            onComplete: callback
        }
    );
}
