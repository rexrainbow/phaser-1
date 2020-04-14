import IContainer from '../container/IContainer';
import Texture from '../../textures/Texture';
import Frame from '../../textures/Frame';

export default interface ISprite extends IContainer
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    vertexData: Float32Array;
    vertexColor: Uint32Array;
    vertexAlpha: Float32Array;
    vertexTint: Uint32Array;
    tint: number;
    updateVertices (): void;
    uploadBuffers (F32: Float32Array, U32: Uint32Array, offset: number, setTexture?: boolean): void;
    setTexture (key: string | Texture, frame?: string | number): this;
    setFrame (key?: string | number | Frame): this;
    isRenderable (): boolean;
}
