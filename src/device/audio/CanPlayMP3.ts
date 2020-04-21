import { CanPlayType } from './CanPlayType';

export function CanPlayMP3 (audioElement?: HTMLAudioElement): boolean
{
    return (
        CanPlayType('audio/mpeg; codecs="mp3"', audioElement)
    );
}
