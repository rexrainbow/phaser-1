import {CanPlayVideoType as CanPlayVideoType2} from "./CanPlayVideoType";
export function CanPlayH264Video(videoElement) {
  return CanPlayVideoType2('video/mp4; codecs="avc1.42E01E"', videoElement);
}
