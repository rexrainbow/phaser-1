import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { RGBCallback } from '../../math/vec3';
export declare type MaterialConfig = {
    ambient?: number[];
    diffuse?: number[];
    specular?: number[];
    shine?: number;
};
export declare class Material {
    ambient: RGBCallback;
    diffuse: RGBCallback;
    specular: RGBCallback;
    isDirty: boolean;
    private _shine;
    constructor(config?: MaterialConfig);
    get shine(): number;
    set shine(value: number);
    private update;
    setUniforms(shader: IShader): void;
    destroy(): void;
}
//# sourceMappingURL=Material.d.ts.map