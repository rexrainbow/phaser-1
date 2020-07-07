let originX = 0.5;
let originY = 0.5;
function DefaultOrigin(x = 0.5, y = x) {
    return () => {
        originX = x;
        originY = y;
    };
}

export { DefaultOrigin, originX, originY };
