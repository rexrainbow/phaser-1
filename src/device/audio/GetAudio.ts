import { CanPlayM4A, CanPlayMP3, CanPlayOGG, CanPlayOpus, CanPlayWAV, CanPlayWebM, HasAudio, HasWebAudio } from '.';
import { IDeviceAudioResult } from './IDeviceAudioResult';

export function GetAudio (): IDeviceAudioResult
{
    const result: IDeviceAudioResult = {
        audioData: HasAudio(),
        m4a: false,
        mp3: false,
        ogg: false,
        opus: false,
        wav: false,
        webAudio: HasWebAudio(),
        webm: false
    };

    if (result.audioData)
    {
        const audioElement: HTMLAudioElement = document.createElement('audio');

        // eslint-disable-next-line @typescript-eslint/unbound-method
        const canPlay: boolean = !!audioElement.canPlayType;

        if (canPlay)
        {
            result.m4a = CanPlayM4A(audioElement);
            result.mp3 = CanPlayMP3(audioElement);
            result.ogg = CanPlayOGG(audioElement);
            result.opus = CanPlayOpus(audioElement);
            result.wav = CanPlayWAV(audioElement);
            result.webm = CanPlayWebM(audioElement);
        }
    }

    return result;
}
