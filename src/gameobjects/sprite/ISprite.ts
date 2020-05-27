import { Frame } from '../../textures/Frame';
import { IContainer } from '../container/IContainer';
import { Texture } from '../../textures/Texture';
import { Vertex } from '../components/Vertex';

export interface ISprite extends IContainer
{
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    vertices: Vertex[];
    tint: number;
    setTexture (key: string | Texture, frame?: string | number): this;
    setFrame (key?: string | number | Frame): this;
}
