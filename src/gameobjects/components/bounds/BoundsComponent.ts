import { IBoundsComponent } from './IBoundsComponent';
import { IGameObject } from '../../IGameObject';
import { Rectangle } from '../../../geom/rectangle/Rectangle';

export class BoundsComponent implements IBoundsComponent
{
    parent: IGameObject;
    area: Rectangle;
    fixed: boolean = false;

    constructor (parent: IGameObject)
    {
        this.parent = parent;

        this.area = new Rectangle();
    }

    setArea (x: number, y: number, width: number, height: number): void
    {
        this.area.set(x, y, width, height);
    }

    destroy (): void
    {
        this.parent = null;
        this.area = null;
    }
}
