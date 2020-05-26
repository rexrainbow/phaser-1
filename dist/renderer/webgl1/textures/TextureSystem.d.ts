import { IWebGLRenderer } from '../IWebGLRenderer';
import { Texture } from '../../../textures/Texture';
export declare class TextureSystem {
    renderer: IWebGLRenderer;
    maxTextures: number;
    currentActiveTexture: number;
    startActiveTexture: number;
    tempTextures: WebGLTexture[];
    textureIndex: number[];
    constructor(renderer: IWebGLRenderer);
    init(): void;
    update(): void;
    reset(): void;
    bind(texture: Texture, index?: number): void;
    unbind(index?: number): void;
    request(texture: Texture): boolean;
}
//# sourceMappingURL=TextureSystem.d.ts.map