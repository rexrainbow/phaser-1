export class TweenProperty
{
    name: string;
    start: number;
    end: number;
    modifier: string;

    constructor (name: string, end: number | string)
    {
        this.name = name;

        if (typeof end === 'string')
        {
            this.modifier = end.substr(0, 1);
            this.end = parseFloat(end.substring(1));
        }
        else
        {
            this.end = end;
        }
    }

    getEnd (start: number): number
    {
        const modifier = this.modifier;
        const end = this.end;

        if (modifier === '+')
        {
            return start + end;
        }
        else if (modifier === '-')
        {
            return start - end;
        }
        else
        {
            return end;
        }
    }

    to (target: unknown): void
    {
        const current = target[ this.name ];
        const end = this.getEnd(current);

        this.start = current;
        this.end = end;
    }

    from (target: unknown): void
    {
        const current = target[ this.name ];
        const end = this.getEnd(current);

        this.start = end;
        this.end = current;

        target[ this.name ] = end;
    }

    update (target: unknown, v: number): void
    {
        target[ this.name ] = this.start + ((this.end - this.start) * v);
    }
}
