import { Frame } from '../../textures/Frame';
import { IContainer } from '../container/IContainer';
import { IRenderer } from '../../renderer/IRenderer';
import { Texture } from '../../textures/Texture';

export interface ISprite extends IContainer
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    vertexData: Float32Array;
    vertexColor: Uint32Array;
    vertexAlpha: Float32Array;
    vertexTint: Uint32Array;
    tint: number;
    setTexture (key: string | Texture, frame?: string | number): this;
    setFrame (key?: string | number | Frame): this;
    render <T extends IRenderer> (renderer: T): void;
}
