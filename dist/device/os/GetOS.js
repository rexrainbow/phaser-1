import {IsAndroid as IsAndroid2} from "./IsAndroid";
import {IsChromeOS as IsChromeOS2} from "./IsChromeOS";
import {IsCordova as IsCordova2} from "./IsCordova";
import {IsCrosswalk as IsCrosswalk2} from "./IsCrosswalk";
import {IsEjecta as IsEjecta2} from "./IsEjecta";
import {IsKindle as IsKindle2} from "./IsKindle";
import {IsLinux as IsLinux2} from "./IsLinux";
import {IsMacOS as IsMacOS2} from "./IsMacOS";
import {IsNode as IsNode2} from "./IsNode";
import {IsNodeWebkit as IsNodeWebkit2} from "./IsNodeWebkit";
import {IsWebApp as IsWebApp2} from "./IsWebApp";
import {IsWindows as IsWindows2} from "./IsWindows";
import {IsWindowsPhone as IsWindowsPhone2} from "./IsWindowsPhone";
import {IsiOS as IsiOS2} from "./IsiOS";
export function GetOS() {
  const ua = navigator.userAgent;
  const {iOS, iOSVersion, iPad, iPhone} = IsiOS2();
  const result = {
    android: IsAndroid2(),
    chromeOS: IsChromeOS2(),
    cordova: IsCordova2(),
    crosswalk: IsCrosswalk2(),
    desktop: false,
    ejecta: IsEjecta2(),
    iOS,
    iOSVersion,
    iPad,
    iPhone,
    kindle: IsKindle2(),
    linux: IsLinux2(),
    macOS: IsMacOS2(),
    node: IsNode2(),
    nodeWebkit: IsNodeWebkit2(),
    pixelRatio: 1,
    webApp: IsWebApp2(),
    windows: IsWindows2(),
    windowsPhone: IsWindowsPhone2()
  };
  if (result.windowsPhone) {
    result.android = false;
    result.iOS = false;
    result.macOS = false;
    result.windows = true;
  }
  const silk = ua.includes("Silk");
  if (result.windows || result.macOS || result.linux && !silk || result.chromeOS) {
    result.desktop = true;
  }
  if (result.windowsPhone || /Windows NT/i.test(ua) && /Touch/i.test(ua)) {
    result.desktop = false;
  }
  return result;
}
