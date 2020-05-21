export class TweenProperty
{
    name: string;
    start: number;
    end: number;
    current: number;

    constructor (name: string, end: number)
    {
        this.name = name;
        this.end = end;
    }

    init (target: {}, reversed: boolean): void
    {
        const name = this.name;
        const property = target[ name ];

        if (reversed)
        {
            this.start = this.end;
            this.end = property;

            target[ name ] = this.start;
        }
        else
        {
            this.start = property;
        }

        this.current = this.start;
    }

    reverse (): void
    {
        const start = this.start;

        this.start = this.end;

        this.end = start;
    }

    update (target: {}, v: number): void
    {
        const current = this.start + ((this.end - this.start) * v);

        this.current = current;

        target[ this.name ] = current;
    }
}
