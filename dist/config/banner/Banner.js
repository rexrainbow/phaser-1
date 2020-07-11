import {SetBanner as SetBanner2} from "./SetBanner";
export function Banner(title, version, url, color, background) {
  return () => {
    SetBanner2(title, version, url, color, background);
  };
}
