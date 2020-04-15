/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * Checks if the given `width` and `height` are a power of two.
 * Useful for checking texture dimensions.
 *
 * @function Phaser.Math.Pow2.IsSize
 * @since 3.0.0
 *
 * @param {number} width - The width.
 * @param {number} height - The height.
 *
 * @return {boolean} `true` if `width` and `height` are a power of two, otherwise `false`.
 */
export default function IsSizePowerOfTwo(width, height) {
    if (width < 1 || height < 1) {
        return false;
    }
    return ((width & (width - 1)) === 0) && ((height & (height - 1)) === 0);
}
//# sourceMappingURL=IsSizePowerOfTwo.js.map