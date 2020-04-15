import CONST from './const';
export default function SetScale(scaleX, scaleY, ...child) {
    child.forEach(entity => {
        let data = entity.transformData;
        data[CONST.SCALE_X] = scaleX;
        data[CONST.SCALE_Y] = scaleY;
        entity.updateTransform();
    });
}
//# sourceMappingURL=SetScale.js.map