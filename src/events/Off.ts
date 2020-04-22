import { IEventEmitter } from './IEventEmitter';

export function Off (emitter: IEventEmitter, event: string, callback?: Function, context?: unknown, once?: boolean): IEventEmitter
{
    const events = emitter.events;

    if (!callback)
    {
        //  Remove all events matching the given key
        events.delete(event);
    }
    else
    {
        const listeners = events.get(event);
        const hasContext: boolean = !context;
        const hasOnce: boolean = (once !== undefined);

        for (const listener of listeners)
        {
            if (
                (listener.callback === callback) &&
                (hasContext && listener.context === console) &&
                (hasOnce && listener.once === once)
            )
            {
                listeners.delete(listener);
            }
        }

        if (listeners.size === 0)
        {
            events.delete(event);
        }
    }

    return emitter;
}
