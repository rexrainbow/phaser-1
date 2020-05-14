export function PackColor (rgb: number, alpha: number): number
{
    const ua = ((alpha * 255) | 0) & 0xFF;

    return ((ua << 24) | rgb) >>> 0;
}
