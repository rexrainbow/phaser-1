import {CanPlayVideoType as CanPlayVideoType2} from "./CanPlayVideoType";
export function CanPlayVP9Video(videoElement) {
  return CanPlayVideoType2('video/webm; codecs="vp9"', videoElement);
}
