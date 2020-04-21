import { CanPlayType } from './CanPlayType';

export function CanPlayOGG (audioElement?: HTMLAudioElement): boolean
{
    return (
        CanPlayType('audio/ogg; codecs="vorbis"', audioElement)
    );
}
