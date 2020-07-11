import {AddBlendMode as AddBlendMode2} from "./AddBlendMode";
import {BindBlendMode as BindBlendMode2} from "./BindBlendMode";
export function SetBlendMode(renderPass, enable, sfactor, dfactor) {
  const entry = AddBlendMode2(renderPass, enable, sfactor, dfactor);
  BindBlendMode2(renderPass, entry);
  renderPass.currentBlendMode = entry;
}
