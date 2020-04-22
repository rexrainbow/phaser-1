import { IEventEmitter } from './IEventEmitter';
import { On } from '.';

export function Once (emitter: IEventEmitter, event: string, callback: Function, context: unknown = emitter): IEventEmitter
{
    return On(emitter, event, callback, context, true);
}
