import {CanPlayAudioType as CanPlayAudioType2} from "./CanPlayAudioType";
export function CanPlayOGG(audioElement) {
  return CanPlayAudioType2('audio/ogg; codecs="vorbis"', audioElement);
}
