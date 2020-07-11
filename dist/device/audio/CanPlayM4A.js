import {CanPlayAudioType as CanPlayAudioType2} from "./CanPlayAudioType";
export function CanPlayM4A(audioElement) {
  return CanPlayAudioType2("audio/x-m4a", audioElement) || CanPlayAudioType2("audio/aac", audioElement);
}
