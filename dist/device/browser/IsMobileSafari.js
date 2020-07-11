import {IsiOS as IsiOS2} from "../os/IsiOS";
export function IsMobileSafari() {
  const {iOS} = IsiOS2();
  const mobileSafari = navigator.userAgent.includes("AppleWebKit") && iOS;
  return {
    mobileSafari
  };
}
