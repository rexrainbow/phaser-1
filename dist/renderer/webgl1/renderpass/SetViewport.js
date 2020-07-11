import {AddViewport as AddViewport2} from "./AddViewport";
import {BindViewport as BindViewport2} from "./BindViewport";
export function SetViewport(renderPass, x = 0, y = 0, width = 0, height = 0) {
  const entry = AddViewport2(renderPass, x, y, width, height);
  BindViewport2(renderPass, entry);
  renderPass.currentViewport = entry;
}
