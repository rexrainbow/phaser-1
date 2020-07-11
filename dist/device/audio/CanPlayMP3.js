import {CanPlayAudioType as CanPlayAudioType2} from "./CanPlayAudioType";
export function CanPlayMP3(audioElement) {
  return CanPlayAudioType2('audio/mpeg; codecs="mp3"', audioElement);
}
