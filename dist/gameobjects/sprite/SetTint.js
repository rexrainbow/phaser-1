import '../../renderer/webgl1/colors/PackColor.js';
import { PackColors } from '../../renderer/webgl1/colors/PackColors.js';

function SetTint(tint, ...children) {
    children.forEach(child => {
        const vertexTint = child.vertexTint;
        vertexTint[0] = tint;
        vertexTint[1] = tint;
        vertexTint[2] = tint;
        vertexTint[3] = tint;
        PackColors(child);
    });
    return children;
}

export { SetTint };
