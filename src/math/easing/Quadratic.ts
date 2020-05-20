export class Quadratic
{
    static In (v: number): number
    {
        return v * v;
    }

    static Out (v: number): number
    {
        return v * (2 - v);
    }

    static InOut (v: number): number
    {
        if ((v *= 2) < 1)
        {
            return 0.5 * v * v;
        }
        else
        {
            return -0.5 * (--v * (v - 2) - 1);
        }
    }
}
