let _bgColor: number = 0;

function BackgroundColor (color: number = 0)
{
    return () => {

        _bgColor = color;

    };
}

function GetBackgroundColor (): number
{
    return _bgColor;
}

export {
    BackgroundColor,
    GetBackgroundColor
}
