import '../../renderer/webgl1/colors/PackColor.js';
import { PackColors } from '../../renderer/webgl1/colors/PackColors.js';

function SetQuadAlpha(topLeft, topRight, bottomLeft, bottomRight, ...children) {
    children.forEach(child => {
        const alpha = child.vertexAlpha;
        alpha[0] = topLeft;
        alpha[1] = topRight;
        alpha[2] = bottomLeft;
        alpha[3] = bottomRight;
        PackColors(child);
    });
    return children;
}

export { SetQuadAlpha };
