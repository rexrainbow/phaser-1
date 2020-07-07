let _contextAttributes = {
    alpha: false,
    antialias: false,
    depth: true,
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

export { GetWebGLContext, WebGLContext };
