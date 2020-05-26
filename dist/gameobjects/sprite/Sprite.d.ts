import { Container } from '../container/Container';
import { Frame } from '../../textures/Frame';
import { ICanvasRenderer } from '../../renderer/canvas/ICanvasRenderer';
import { IGameObject } from '../IGameObject';
import { ISprite } from './ISprite';
import { IWebGLRenderer } from '../../renderer/webgl1/IWebGLRenderer';
import { Texture } from '../../textures/Texture';
export declare class Sprite extends Container implements ISprite {
    texture: Texture;
    frame: Frame;
    hasTexture: boolean;
    vertexData: Float32Array;
    vertexColor: Uint32Array;
    vertexAlpha: Float32Array;
    vertexTint: Uint32Array;
    protected _tint: number;
    constructor(x: number, y: number, texture: string | Texture, frame?: string | number);
    setTexture(key: string | Texture, frame?: string | number): this;
    setFrame(key?: string | number | Frame): this;
    isRenderable(): boolean;
    preRender(): void;
    renderGL<T extends IWebGLRenderer>(renderer: T): void;
    renderCanvas<T extends ICanvasRenderer>(renderer: T): void;
    get alpha(): number;
    set alpha(value: number);
    get tint(): number;
    set tint(value: number);
    destroy(reparentChildren?: IGameObject): void;
}
//# sourceMappingURL=Sprite.d.ts.map