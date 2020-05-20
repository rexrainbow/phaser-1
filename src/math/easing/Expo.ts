export class Expo
{
    static In (v: number): number
    {
        return Math.pow(2, 10 * (v - 1)) - 0.001;
    }

    static Out (v: number): number
    {
        return 1 - Math.pow(2, -10 * v);
    }

    static InOut (v: number): number
    {
        if (v == 0)
        {
            return 0;
        }

        if (v == 1)
        {
            return 1;
        }

        if ((v *= 2) < 1)
        {
            return 0.5 * Math.pow(2, 10 * (v - 1));
        }
        else
        {
            return 0.5 * (2 - Math.pow(2, -10 * (v - 1)));
        }
    }
}
