import '../../renderer/webgl1/colors/PackColor.js';
import { PackColors } from '../../renderer/webgl1/colors/PackColors.js';

function SetAlpha(alpha, ...children) {
    children.forEach(child => {
        const vertexAlpha = child.vertexAlpha;
        vertexAlpha[0] = alpha;
        vertexAlpha[1] = alpha;
        vertexAlpha[2] = alpha;
        vertexAlpha[3] = alpha;
        PackColors(child);
    });
    return children;
}

export { SetAlpha };
