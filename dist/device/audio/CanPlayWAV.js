import {CanPlayAudioType as CanPlayAudioType2} from "./CanPlayAudioType";
export function CanPlayWAV(audioElement) {
  return CanPlayAudioType2('audio/wav; codecs="1"', audioElement);
}
