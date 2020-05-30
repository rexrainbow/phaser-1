let _contextAttributes: WebGLContextAttributes = {
    alpha: false,
    antialias: false,
    depth: true,
    premultipliedAlpha: false
};

function WebGLContext (contextAttributes: WebGLContextAttributes): () => void
{
    return (): void =>
    {
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
};
