import {CanPlayVideoType as CanPlayVideoType2} from "./CanPlayVideoType";
export function CanPlayOGGVideo(videoElement) {
  return CanPlayVideoType2('video/ogg; codecs="theora"', videoElement);
}
