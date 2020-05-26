import { IShader } from './IShader';
import { IShaderConstructor } from './IShaderConstructor';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { SingleTextureQuadShader } from './SingleTextureQuadShader';
export declare type ShaderStackEntry = {
    shader: IShader;
    textureID?: number;
};
export declare class ShaderSystem {
    renderer: IWebGLRenderer;
    singleQuadShader: SingleTextureQuadShader;
    currentEntry: ShaderStackEntry;
    current: IShader;
    stack: ShaderStackEntry[];
    constructor(renderer: IWebGLRenderer, currentShader: IShaderConstructor);
    add(shader: IShader, textureID?: number): ShaderStackEntry;
    set(shader: IShader, textureID?: number): boolean;
    setDefault(textureID: number): void;
    pop(): void;
    reset(): void;
    flush(): boolean;
    rebind(): void;
    popAndRebind(): void;
    clear(): void;
    destroy(): void;
}
//# sourceMappingURL=ShaderSystem.d.ts.map