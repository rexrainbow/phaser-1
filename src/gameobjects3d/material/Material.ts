import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { RGBCallback } from '../../math/vec3';

export class Material
{
    ambient: RGBCallback;
    diffuse: RGBCallback;
    specular: RGBCallback;

    isDirty: boolean = false;

    private _shine: number = 64;

    constructor ()
    {
        this.ambient = new RGBCallback(() => this.update(), 1, 1, 1);
        this.diffuse = new RGBCallback(() => this.update(), 1, 1, 1);
        this.specular = new RGBCallback(() => this.update(), 1, 1, 1);
    }

    get shine (): number
    {
        return this._shine;
    }

    set shine (value: number)
    {
        this._shine = value;

        this.isDirty = true;
    }

    private update (): void
    {
        this.isDirty = true;
    }

    setUniforms (shader: IShader): void
    {
        //  TODO - Only set if dirty (different to bound material?)

        const uniforms = shader.uniforms;

        uniforms.set('uMaterialAmbient', this.ambient.toArray());
        uniforms.set('uMaterialDiffuse', this.diffuse.toArray());
        uniforms.set('uMaterialSpecular', this.specular.toArray());
        uniforms.set('uMaterialShine', this._shine);
    }

    destroy (): void
    {
        this.ambient.destroy();
        this.diffuse.destroy();
        this.specular.destroy();
    }
}
