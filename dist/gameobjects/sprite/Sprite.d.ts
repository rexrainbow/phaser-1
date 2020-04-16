import Container from '../container/Container';
import Texture from '../../textures/Texture';
import Frame from '../../textures/Frame';
import IContainer from '../container/IContainer';
import Rectangle from '../../geom/rectangle/Rectangle';
export default class Sprite extends Container {
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    vertexData: Float32Array;
    vertexColor: Uint32Array;
    vertexAlpha: Float32Array;
    vertexTint: Uint32Array;
    private _tint;
    private _prevTextureID;
    constructor(x: number, y: number, texture: string | Texture, frame?: string | number);
    getBounds(includeChildren?: boolean): Rectangle;
    setTexture(key: string | Texture, frame?: string | number): this;
    setFrame(key?: string | number | Frame): this;
    isRenderable(): boolean;
    updateVertices(): void;
    uploadBuffers(F32: Float32Array, U32: Uint32Array, offset: number, setTexture?: boolean): void;
    destroy(reparentChildren?: IContainer): void;
    get tint(): number;
    set tint(value: number);
}
//# sourceMappingURL=Sprite.d.ts.map