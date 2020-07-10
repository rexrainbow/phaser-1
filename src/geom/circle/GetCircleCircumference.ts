/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ICircle } from './ICircle';

export function GetCircleCircumference (circle: ICircle): number
{
    return 2 * (Math.PI * circle.radius);
}
