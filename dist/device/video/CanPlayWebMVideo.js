import {CanPlayVideoType as CanPlayVideoType2} from "./CanPlayVideoType";
export function CanPlayWebMVideo(videoElement) {
  return CanPlayVideoType2('video/webm; codecs="vp8, vorbis"', videoElement);
}
