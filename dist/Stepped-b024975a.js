function Stepped(v, steps = 1) {
    if (v <= 0) {
        return 0;
    }
    else if (v >= 1) {
        return 1;
    }
    else {
        return (((steps * v) | 0) + 1) * (1 / steps);
    }
}

var Stepped$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Stepped: Stepped
});

export { Stepped as S, Stepped$1 as a };
