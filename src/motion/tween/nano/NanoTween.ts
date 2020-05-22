import { IEventEmitter } from '../../../events/IEventEmitter';
import { NanoTweenHandler } from './NanoTweenHandler';

export function NanoTween (target: {}, emitter: IEventEmitter = null, autoStart: boolean = true): NanoTweenHandler
{
    return new NanoTweenHandler(target, emitter, autoStart);
}
