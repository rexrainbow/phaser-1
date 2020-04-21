import { CanPlayType } from './CanPlayType';

export function CanPlayWAV (audioElement?: HTMLAudioElement): boolean
{
    return (
        CanPlayType('audio/wav; codecs="1"', audioElement)
    );
}
