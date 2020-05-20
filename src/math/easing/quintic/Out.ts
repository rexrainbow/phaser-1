export function Out (v: number): number
{
    return (v = v - 1) * v * v * v * v + 1;
}
