import {AddShader as AddShader2} from "./AddShader";
import {BindShader as BindShader2} from "./BindShader";
export function SetShader(renderPass, shader, textureID) {
  const entry = AddShader2(renderPass, shader, textureID);
  BindShader2(renderPass, entry);
  renderPass.currentShader = entry;
}
