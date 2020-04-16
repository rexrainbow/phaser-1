let _width: number = 800;
let _height: number = 600;
let _resolution: number = 1;

function Size (width: number = 800, height: number = 600, resolution: number = 1)
{
    if (resolution === 0)
    {
        resolution = window.devicePixelRatio;
    }

    return () => {

        _width = width;
        _height = height;
        _resolution = resolution;
    
    };
}

function GetWidth (): number
{
    return _width;
}

function GetHeight (): number
{
    return _height;
}

function GetResolution (): number
{
    return _resolution;
}

export {
    Size,
    GetWidth,
    GetHeight,
    GetResolution
}
