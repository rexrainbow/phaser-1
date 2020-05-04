import { IGameObject } from '../IGameObject';
import { IRenderer } from '../../renderer/IRenderer';
import { Texture } from '../../textures';

export interface ISpriteBatch extends IGameObject
{
    data: ArrayBuffer;
    vertexViewF32: Float32Array;
    vertexViewU32: Uint32Array;
    vertexBuffer: WebGLBuffer;
    count: number;
    maxSize: number;
    texture: Texture;
    hasTexture: boolean;
    resetBuffer (): void;
    setTexture (key: string | Texture): this;
    add (x: number, y: number, frame?: string | number): this;
    updateTextureIndex (): void;
    render <T extends IRenderer> (renderer: T): void;
}
