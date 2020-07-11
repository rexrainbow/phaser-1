import {IsWindowsPhone as IsWindowsPhone2} from "../os/IsWindowsPhone";
export function IsSafari() {
  const ua = navigator.userAgent;
  const safari = ua.includes("Safari") && !IsWindowsPhone2();
  const safariVersion = /Version\/(\d+)\./.test(ua) ? parseInt(RegExp.$1, 10) : 0;
  return {
    safari,
    safariVersion
  };
}
