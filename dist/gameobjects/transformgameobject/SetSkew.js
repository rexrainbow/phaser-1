import CONST from './const';
export default function SetSkew(skewX, skewY, ...child) {
    child.forEach(entity => {
        let data = entity.transformData;
        data[CONST.SKEW_X] = skewX;
        data[CONST.SKEW_Y] = skewY;
        entity.updateCache();
    });
}
//# sourceMappingURL=SetSkew.js.map