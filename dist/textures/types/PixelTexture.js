/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import {Arne16 as Arne162} from "../palettes/Arne16";
import {CreateCanvas as CreateCanvas2} from "../CreateCanvas";
import {Texture as Texture2} from "../Texture";
export function PixelTexture(config) {
  const {
    data = [],
    palette = Arne162,
    pixelWidth = 1,
    pixelHeight = pixelWidth,
    preRender = null,
    postRender = null
  } = config;
  let {
    canvas = null,
    resizeCanvas = true,
    clearCanvas = true
  } = config;
  const width = Math.floor(Math.abs(data[0].length * pixelWidth));
  const height = Math.floor(Math.abs(data.length * pixelHeight));
  if (!canvas) {
    canvas = CreateCanvas2(width, height).canvas;
    resizeCanvas = false;
    clearCanvas = false;
  }
  if (resizeCanvas) {
    canvas.width = width;
    canvas.height = height;
  }
  const ctx = canvas.getContext("2d");
  if (clearCanvas) {
    ctx.clearRect(0, 0, width, height);
  }
  if (preRender) {
    preRender(canvas, ctx);
  }
  for (let y = 0; y < data.length; y++) {
    const row = data[y];
    for (let x = 0; x < row.length; x++) {
      const d = row[x];
      if (d !== "." && d !== " ") {
        ctx.fillStyle = palette[parseInt("0x" + d.toUpperCase())];
        ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
      }
    }
  }
  if (postRender) {
    postRender(canvas, ctx);
  }
  return new Texture2(canvas);
}
