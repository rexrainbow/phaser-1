import { AddTimer } from './AddTimer';
import { IWorld } from '../world/IBaseWorld';

export function AddDelayedCall (world: IWorld, delay: number, callback: () => void): void
{
    AddTimer(world,
        {
            duration: 0,
            delay,
            onComplete: callback
        }
    );
}
