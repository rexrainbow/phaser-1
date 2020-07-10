import { IRenderPass } from '../../renderer/webgl1/renderpass/IRenderPass';
import { ISpriteBatch } from './ISpriteBatch';
import { Layer } from '../layer/Layer';
import { SpriteBatchAddConfig } from './SpriteBatchAddConfig';
import { Texture } from '../../textures/Texture';
export declare class SpriteBatch extends Layer implements ISpriteBatch {
    data: ArrayBuffer;
    vertexViewF32: Float32Array;
    vertexViewU32: Uint32Array;
    index: Uint16Array;
    vertexBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    count: number;
    maxSize: number;
    glTextureIndex: number;
    texture: Texture;
    hasTexture: boolean;
    constructor(maxSize: number, texture: string | Texture);
    resetBuffers(): void;
    setMaxSize(value: number): this;
    setTexture(key: string | Texture): this;
    isRenderable(): boolean;
    clear(): this;
    private addToBatch;
    add(config: SpriteBatchAddConfig): this;
    addXY(x: number, y: number, frame?: string | number): this;
    updateTextureIndex(): void;
    renderGL<T extends IRenderPass>(renderPass: T): void;
    destroy(): void;
}
//# sourceMappingURL=SpriteBatch.d.ts.map