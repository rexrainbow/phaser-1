import { CanPlayType } from './CanPlayType';

export function CanPlayM4A (audioElement?: HTMLAudioElement): boolean
{
    return (
        CanPlayType('audio/x-m4a', audioElement) ||
        CanPlayType('audio/aac', audioElement)
    );
}
