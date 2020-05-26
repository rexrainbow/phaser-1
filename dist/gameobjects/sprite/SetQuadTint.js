import '../../renderer/webgl1/colors/PackColor.js';
import { PackColors } from '../../renderer/webgl1/colors/PackColors.js';

function SetQuadTint(topLeft, topRight, bottomLeft, bottomRight, ...children) {
    children.forEach(child => {
        const tint = child.vertexTint;
        tint[0] = topLeft;
        tint[1] = topRight;
        tint[2] = bottomLeft;
        tint[3] = bottomRight;
        PackColors(child);
    });
    return children;
}

export { SetQuadTint };
