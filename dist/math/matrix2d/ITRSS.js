//  Apply the identity, translate, rotate, scale and skew operations on the target Matrix then returns it.
export default function ITRSS(target, x, y, angle = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
    if (angle === 0) {
        return target.set(1, 0, 0, 1, x, y);
    }
    else {
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        return target.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
}
//# sourceMappingURL=ITRSS.js.map