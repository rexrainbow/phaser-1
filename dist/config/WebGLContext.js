let _contextAttributes = {
    alpha: false,
    antialias: false,
    depth: false,
    premultipliedAlpha: false
};
function WebGLContext(contextAttributes) {
    return () => {
        _contextAttributes = contextAttributes;
    };
}
function GetWebGLContext() {
    return _contextAttributes;
}
export { WebGLContext, GetWebGLContext };
//# sourceMappingURL=WebGLContext.js.map