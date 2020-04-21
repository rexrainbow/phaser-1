let bgColor = 0;

function BackgroundColor (color: number = 0)
{
    return (): void =>
    {
        bgColor = color;
    };
}

function GetBackgroundColor (): number
{
    return bgColor;
}

export {
    BackgroundColor,
    GetBackgroundColor
};
