import PackColors from '../../renderer/webgl1/PackColors';
export default function SetQuadAlpha(topLeft, topRight, bottomLeft, bottomRight, ...sprite) {
    sprite.forEach(entity => {
        let alpha = entity.vertexAlpha;
        alpha[0] = topLeft;
        alpha[1] = topRight;
        alpha[2] = bottomLeft;
        alpha[3] = bottomRight;
        PackColors(entity);
    });
}
//# sourceMappingURL=SetQuadAlpha.js.map