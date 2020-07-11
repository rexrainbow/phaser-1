import {CanPlayAudioType as CanPlayAudioType2} from "./CanPlayAudioType";
export function CanPlayWebM(audioElement) {
  return CanPlayAudioType2('audio/webm; codecs="vorbis"', audioElement);
}
