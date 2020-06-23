import { Frame } from '../../textures/Frame';
import { IGameObject3D } from '../IGameObject3D';
import { IVertexBuffer } from '../../renderer/webgl1/buffers/IVertexBuffer';
import { Texture } from '../../textures/Texture';

export interface IMesh extends IGameObject3D
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    buffer: IVertexBuffer;
    setTexture (key: string | Texture, frame?: string | number): this;
    setFrame (key?: string | number | Frame): this;
}
