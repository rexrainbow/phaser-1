import CONST from './const';
export default function SetPosition(x, y, ...child) {
    child.forEach(entity => {
        let data = entity.transformData;
        data[CONST.POSITION_X] = x;
        data[CONST.POSITION_Y] = y;
        entity.updateTransform();
    });
}
//# sourceMappingURL=SetPosition.js.map