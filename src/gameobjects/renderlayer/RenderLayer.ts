import { Layer } from '../layer/Layer';
import { Texture } from '../../textures/Texture';

export class RenderLayer extends Layer
{


    constructor ()
    {
        super();

        this.type = 'RenderLayer';
    }

    draw (x: number, y: number, texture: string | Texture, frame?: string | number): this
    {


        return this;
    }

    //  drawWithTransformConfig



}
