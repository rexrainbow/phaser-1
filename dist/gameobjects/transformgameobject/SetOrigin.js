import CONST from './const';
export default function SetOrigin(originX, originY, ...child) {
    child.forEach(entity => {
        let data = entity.transformData;
        data[CONST.ORIGIN_X] = originX;
        data[CONST.ORIGIN_Y] = originY;
    });
}
//# sourceMappingURL=SetOrigin.js.map