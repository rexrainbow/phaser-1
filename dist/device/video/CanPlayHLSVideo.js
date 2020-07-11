import {CanPlayVideoType as CanPlayVideoType2} from "./CanPlayVideoType";
export function CanPlayHLSVideo(videoElement) {
  return CanPlayVideoType2('application/x-mpegURL; codecs="avc1.42E01E"', videoElement);
}
