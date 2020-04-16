/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Arne16 from '../palettes/Arne16';
import CreateCanvas from '../CreateCanvas';
import Texture from '../Texture';
/**
 * Generates a texture based on the given Create configuration object.
 *
 * The texture is drawn using a fixed-size indexed palette of 16 colors, where the hex value in the
 * data cells map to a single color. For example, if the texture config looked like this:
 *
 * ```javascript
 * var star = [
 *   '.....828.....',
 *   '....72227....',
 *   '....82228....',
 *   '...7222227...',
 *   '2222222222222',
 *   '8222222222228',
 *   '.72222222227.',
 *   '..787777787..',
 *   '..877777778..',
 *   '.78778887787.',
 *   '.27887.78872.',
 *   '.787.....787.'
 * ];
 *
 * this.textures.generate('star', { data: star, pixelWidth: 4 });
 * ```
 *
 * Then it would generate a texture that is 52 x 48 pixels in size, because each cell of the data array
 * represents 1 pixel multiplied by the `pixelWidth` value. The cell values, such as `8`, maps to color
 * number 8 in the palette. If a cell contains a period character `.` then it is transparent.
 *
 * The default palette is Arne16, but you can specify your own using the `palette` property.
 *
 * @function Phaser.Create.GenerateTexture
 * @since 3.0.0
 *
 * @param {Phaser.Types.Create.GenerateTextureConfig} config - The Generate Texture Configuration object.
 *
 * @return {Texture} An HTMLCanvasElement which contains the generated texture drawn to it.
 */
export default function PixelTexture(config) {
    let { data = [], canvas = null, palette = Arne16, pixelWidth = 1, pixelHeight = 1, resizeCanvas = true, clearCanvas = true, preRender = null, postRender = null } = config;
    const width = Math.floor(Math.abs(data[0].length * pixelWidth));
    const height = Math.floor(Math.abs(data.length * pixelHeight));
    if (!canvas) {
        canvas = CreateCanvas(width, height).canvas;
        resizeCanvas = false;
        clearCanvas = false;
    }
    if (resizeCanvas) {
        canvas.width = width;
        canvas.height = height;
    }
    const ctx = canvas.getContext('2d');
    if (clearCanvas) {
        ctx.clearRect(0, 0, width, height);
    }
    //  preRender Callback?
    if (preRender) {
        preRender(canvas, ctx);
    }
    //  Draw it
    for (let y = 0; y < data.length; y++) {
        const row = data[y];
        for (let x = 0; x < row.length; x++) {
            const d = row[x];
            if (d !== '.' && d !== ' ') {
                ctx.fillStyle = palette[d];
                ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
            }
        }
    }
    //  postRender Callback?
    if (postRender) {
        postRender(canvas, ctx);
    }
    return new Texture(canvas);
}
//# sourceMappingURL=PixelTexture.js.map