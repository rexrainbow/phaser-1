import { GameObject } from '../GameObject';

export class Container extends GameObject
{
    private _alpha: number = 1;

    constructor (x: number = 0, y: number = 0)
    {
        super(x, y);

        this.type = 'Container';
    }

    get alpha (): number
    {
        return this._alpha;
    }

    set alpha (value: number)
    {
        if (value !== this._alpha)
        {
            this._alpha = value;

            // this.setDirtyRender();
        }
    }
}
