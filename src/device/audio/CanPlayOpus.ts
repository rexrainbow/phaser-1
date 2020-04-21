import { CanPlayType } from './CanPlayType';

export function CanPlayOpus (audioElement?: HTMLAudioElement): boolean
{
    return (
        CanPlayType('audio/ogg; codecs="opus"', audioElement) ||
        CanPlayType('audio/webm; codecs="opus"', audioElement)
    );
}
