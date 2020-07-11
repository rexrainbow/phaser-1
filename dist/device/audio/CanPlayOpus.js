import {CanPlayAudioType as CanPlayAudioType2} from "./CanPlayAudioType";
export function CanPlayOpus(audioElement) {
  return CanPlayAudioType2('audio/ogg; codecs="opus"', audioElement) || CanPlayAudioType2('audio/webm; codecs="opus"', audioElement);
}
