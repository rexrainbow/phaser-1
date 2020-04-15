import CONST from './const';
export default function SetRotation(rotation, ...child) {
    child.forEach(entity => {
        let data = entity.transformData;
        if (rotation !== data[CONST.ROTATION]) {
            data[CONST.ROTATION] = rotation;
            entity.updateCache();
        }
    });
}
//# sourceMappingURL=SetRotation.js.map