import { IEventEmitter } from '../../../events/IEventEmitter';
import { NanoTween } from './NanoTween';

export function AddTween (target: {}, emitter: IEventEmitter = null, autoStart: boolean = true): NanoTween
{
    return new NanoTween(target, emitter, autoStart);
}
