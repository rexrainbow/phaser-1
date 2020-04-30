import { Frame } from '../../textures/Frame';
import { IGameObject } from '../IGameObject';
import { Texture } from '../../textures/Texture';

export interface ISprite extends IGameObject
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    vertexData: Float32Array;
    vertexColor: Uint32Array;
    vertexAlpha: Float32Array;
    vertexTint: Uint32Array;
    alpha: number;
    tint: number;
    setTexture (key: string | Texture, frame?: string | number): this;
    setFrame (key?: string | number | Frame): this;
}
