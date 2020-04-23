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
        result.m4a = CanPlayM4A();
        result.mp3 = CanPlayMP3();
        result.ogg = CanPlayOGG();
        result.opus = CanPlayOpus();
        result.wav = CanPlayWAV();
        result.webm = CanPlayWebM();
    }

    return result;
}
