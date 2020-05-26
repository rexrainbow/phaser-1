function GetRGBArray(color, output = []) {
    const r = color >> 16 & 0xFF;
    const g = color >> 8 & 0xFF;
    const b = color & 0xFF;
    const a = (color > 16777215) ? color >>> 24 : 255;
    output[0] = r / 255;
    output[1] = g / 255;
    output[2] = b / 255;
    output[3] = a / 255;
    return output;
}

export { GetRGBArray };
