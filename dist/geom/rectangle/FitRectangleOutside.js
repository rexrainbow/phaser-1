import { GetRectangleAspectRatio } from './GetRectangleAspectRatio.js';
import { GetRectangleCenterX } from './GetRectangleCenterX.js';
import { GetRectangleCenterY } from './GetRectangleCenterY.js';

function FitRectangleOutside(target, source) {
    const ratio = GetRectangleAspectRatio(target);
    let width = source.width;
    let height = source.height;
    if (ratio > GetRectangleAspectRatio(source)) {
        width = source.height * ratio;
    }
    else {
        height = source.width / ratio;
    }
    return target.set(GetRectangleCenterX(source) - target.width / 2, GetRectangleCenterY(source) - target.height / 2, width, height);
}

export { FitRectangleOutside };
