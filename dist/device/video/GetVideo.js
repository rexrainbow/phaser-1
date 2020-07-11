import {CanPlayH264Video as CanPlayH264Video2} from "./CanPlayH264Video";
import {CanPlayHLSVideo as CanPlayHLSVideo2} from "./CanPlayHLSVideo";
import {CanPlayOGGVideo as CanPlayOGGVideo2} from "./CanPlayOGGVideo";
import {CanPlayVP9Video as CanPlayVP9Video2} from "./CanPlayVP9Video";
import {CanPlayWebMVideo as CanPlayWebMVideo2} from "./CanPlayWebMVideo";
export function GetVideo() {
  return {
    h264Video: CanPlayH264Video2(),
    hlsVideo: CanPlayHLSVideo2(),
    oggVideo: CanPlayOGGVideo2(),
    vp9Video: CanPlayVP9Video2(),
    webmVideo: CanPlayWebMVideo2()
  };
}
