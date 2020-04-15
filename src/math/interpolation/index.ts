/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import Bezier from './BezierInterpolation';
import CatmullRom from './CatmullRomInterpolation';
import CubicBezier from './CubicBezierInterpolation';
import Linear from './LinearInterpolation';
import QuadraticBezier from './QuadraticBezierInterpolation';
import SmoothStep from './SmoothStepInterpolation';
import SmootherStep from './SmootherStepInterpolation';

/**
 * @namespace Phaser.Math.Interpolation
 */

export default {
    Bezier,
    CatmullRom,
    CubicBezier,
    Linear,
    QuadraticBezier,
    SmoothStep,
    SmootherStep
}
