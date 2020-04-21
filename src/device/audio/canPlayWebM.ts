import { CanPlayType } from './CanPlayType';

export function CanPlayWebM (audioElement?: HTMLAudioElement): boolean
{
    return (
        CanPlayType('audio/webm; codecs="vorbis"', audioElement)
    );
}
