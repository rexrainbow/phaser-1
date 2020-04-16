let _contextAttributes: WebGLContextAttributes = {
    alpha: false,
    antialias: false,
    depth: false,
    premultipliedAlpha: false
};

function WebGLContext (contextAttributes: WebGLContextAttributes)
{
    return () => {

        _contextAttributes = contextAttributes;
    
    };
}

function GetWebGLContext (): WebGLContextAttributes
{
    return _contextAttributes;
}

export {
    WebGLContext,
    GetWebGLContext
}
