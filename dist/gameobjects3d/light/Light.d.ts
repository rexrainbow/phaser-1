import { RGBCallback, Vec3Callback } from '../../math/vec3';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
export declare type LightConfig = {
    x?: number;
    y?: number;
    z?: number;
    ambient?: number[];
    diffuse?: number[];
    specular?: number[];
};
export declare class Light {
    position: Vec3Callback;
    ambient: RGBCallback;
    diffuse: RGBCallback;
    specular: RGBCallback;
    isDirty: boolean;
    constructor(config?: LightConfig);
    setUniforms(shader: IShader): void;
    private update;
    destroy(): void;
}
//# sourceMappingURL=Light.d.ts.map