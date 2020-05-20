export class Elastic
{
    static In (v: number, amplitude: number = 0.1, period: number = 0.1): number
    {
        if (v === 0)
        {
            return 0;
        }
        else if (v === 1)
        {
            return 1;
        }
        else
        {
            let s = period / 4;

            if (amplitude < 1)
            {
                amplitude = 1;
            }
            else
            {
                s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
            }

            return -(amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
        }
    }

    static Out (v: number, amplitude: number = 0.1, period: number = 0.1): number
    {
        if (v === 0)
        {
            return 0;
        }
        else if (v === 1)
        {
            return 1;
        }
        else
        {
            let s = period / 4;

            if (amplitude < 1)
            {
                amplitude = 1;
            }
            else
            {
                s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
            }

            return (amplitude * Math.pow(2, -10 * v) * Math.sin((v - s) * (2 * Math.PI) / period) + 1);
        }
    }

    static InOut (v: number, amplitude: number = 0.1, period: number = 0.1): number
    {
        if (v === 0)
        {
            return 0;
        }
        else if (v === 1)
        {
            return 1;
        }
        else
        {
            let s = period / 4;

            if (amplitude < 1)
            {
                amplitude = 1;
            }
            else
            {
                s = period * Math.asin(1 / amplitude) / (2 * Math.PI);
            }

            if ((v *= 2) < 1)
            {
                return -0.5 * (amplitude * Math.pow(2, 10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period));
            }
            else
            {
                return amplitude * Math.pow(2, -10 * (v -= 1)) * Math.sin((v - s) * (2 * Math.PI) / period) * 0.5 + 1;
            }
        }
    }
}
