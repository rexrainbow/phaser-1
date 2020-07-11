import {CreateCanvas as CreateCanvas2} from "../CreateCanvas";
import {Texture as Texture2} from "../Texture";
export function SolidColorTexture(color = "rgba(0,0,0,0)", width = 32, height = 32) {
  const ctx = CreateCanvas2(width, height);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  return new Texture2(ctx.canvas);
}
