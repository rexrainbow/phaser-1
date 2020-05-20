export function In (v: number, overshoot: number = 1.70158): number
{
    return v * v * ((overshoot + 1) * v - overshoot);
}
