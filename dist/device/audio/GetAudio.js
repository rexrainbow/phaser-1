import {CanPlayM4A as CanPlayM4A2} from "./CanPlayM4A";
import {CanPlayMP3 as CanPlayMP32} from "./CanPlayMP3";
import {CanPlayOGG as CanPlayOGG2} from "./CanPlayOGG";
import {CanPlayOpus as CanPlayOpus2} from "./CanPlayOpus";
import {CanPlayWAV as CanPlayWAV2} from "./CanPlayWAV";
import {CanPlayWebM as CanPlayWebM2} from "./CanPlayWebM";
import {HasAudio as HasAudio2} from "./HasAudio";
import {HasWebAudio as HasWebAudio2} from "./HasWebAudio";
export function GetAudio() {
  const result = {
    audioData: HasAudio2(),
    m4a: false,
    mp3: false,
    ogg: false,
    opus: false,
    wav: false,
    webAudio: HasWebAudio2(),
    webm: false
  };
  if (result.audioData) {
    result.m4a = CanPlayM4A2();
    result.mp3 = CanPlayMP32();
    result.ogg = CanPlayOGG2();
    result.opus = CanPlayOpus2();
    result.wav = CanPlayWAV2();
    result.webm = CanPlayWebM2();
  }
  return result;
}
