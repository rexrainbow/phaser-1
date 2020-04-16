import PackColors from '../../renderer/webgl1/PackColors';
export default function SetQuadTint(topLeft, topRight, bottomLeft, bottomRight, ...sprite) {
    sprite.forEach(entity => {
        let tint = entity.vertexTint;
        tint[0] = topLeft;
        tint[1] = topRight;
        tint[2] = bottomLeft;
        tint[3] = bottomRight;
        PackColors(entity);
    });
}
//# sourceMappingURL=SetQuadTint.js.map