import {IsChrome as IsChrome2} from "./IsChrome";
import {IsEdge as IsEdge2} from "./IsEdge";
import {IsFirefox as IsFirefox2} from "./IsFirefox";
import {IsMSIE as IsMSIE2} from "./IsMSIE";
import {IsMobileSafari as IsMobileSafari2} from "./IsMobileSafari";
import {IsOpera as IsOpera2} from "./IsOpera";
import {IsSafari as IsSafari2} from "./IsSafari";
import {IsSilk as IsSilk2} from "./IsSilk";
import {IsTrident as IsTrident2} from "./IsTrident";
export function GetBrowser() {
  const {chrome, chromeVersion} = IsChrome2();
  const {edge} = IsEdge2();
  const {firefox, firefoxVersion} = IsFirefox2();
  let {ie, ieVersion} = IsMSIE2();
  const {mobileSafari} = IsMobileSafari2();
  const {opera} = IsOpera2();
  const {safari, safariVersion} = IsSafari2();
  const {silk} = IsSilk2();
  const {trident, tridentVersion, tridentIEVersion} = IsTrident2();
  if (trident) {
    ie = true;
    ieVersion = tridentIEVersion;
  }
  const result = {
    chrome,
    chromeVersion,
    edge,
    firefox,
    firefoxVersion,
    ie,
    ieVersion,
    mobileSafari,
    opera,
    safari,
    safariVersion,
    silk,
    trident,
    tridentVersion
  };
  return result;
}
