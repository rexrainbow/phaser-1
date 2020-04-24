import { AddTimerEvent } from './AddTimerEvent';
import { IWorld } from '../world/IWorld';

export function AddDelayedCall (world: IWorld, delay: number, callback: () => void): void
{
    AddTimerEvent(world,
        {
            duration: 0,
            delay,
            onComplete: callback
        }
    );
}
