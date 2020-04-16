/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * Calculates the area of the Ellipse.
 *
 * @function Phaser.Geom.Ellipse.Area
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to get the area of.
 *
 * @return {number} The area of the Ellipse.
 */
export default function Area(ellipse) {
    if ((ellipse.width <= 0 || ellipse.height <= 0)) {
        return 0;
    }
    //  units squared
    return (ellipse.getMajorRadius() * ellipse.getMinorRadius() * Math.PI);
}
//# sourceMappingURL=Area.js.map