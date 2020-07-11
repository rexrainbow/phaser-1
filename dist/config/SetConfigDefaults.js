import {SetBackgroundColor as SetBackgroundColor2} from "./backgroundcolor/SetBackgroundColor";
import {SetBanner as SetBanner2} from "./banner/SetBanner";
import {SetBatchSize as SetBatchSize2} from "./batchsize/SetBatchSize";
import {SetDefaultOrigin as SetDefaultOrigin2} from "./defaultorigin/SetDefaultOrigin";
import {SetMaxTextures as SetMaxTextures2} from "./maxtextures/SetMaxTextures";
import {SetSize as SetSize2} from "./size/SetSize";
export function SetConfigDefaults() {
  SetBackgroundColor2(0);
  SetBatchSize2(4096);
  SetBanner2("Phaser", "4.0.0", "https://phaser4.io");
  SetMaxTextures2(0);
  SetDefaultOrigin2(0.5, 0.5);
  SetSize2(800, 600, 1);
}
