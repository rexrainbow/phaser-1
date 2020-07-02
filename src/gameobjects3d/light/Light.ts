import { RGBCallback, Vec3Callback } from '../../math/vec3';

import { IShader } from '../../renderer/webgl1/shaders/IShader';

/*
    Color vectors for each of the Phong lighting's components.
    The ambient material vector defines what color the surface reflects under
    ambient lighting; this is usually the same as the surface's color.
    The diffuse material vector defines the color of the surface under diffuse lighting.
    The diffuse color is (just like ambient lighting) set to the desired surface's color.
    The specular material vector sets the color of the specular highlight on the surface
    (or possibly even reflect a surface-specific color). Lastly, the shininess impacts
    the scattering/radius of the specular highlight.
*/

export class Light
{
    position: Vec3Callback;

    ambient: RGBCallback;
    diffuse: RGBCallback;
    specular: RGBCallback;

    isDirty: boolean = false;

    constructor (x: number, y: number, z: number)
    {
        this.position = new Vec3Callback(() => this.update(), x, y, z);

        this.ambient = new RGBCallback(() => this.update(), 0.2, 0.2, 0.2);
        this.diffuse = new RGBCallback(() => this.update(), 0.5, 0.5, 0.5);
        this.specular = new RGBCallback(() => this.update(), 1, 1, 1);
    }

    setUniforms (shader: IShader): void
    {
        //  TODO - Only set if dirty (different to bound light?)

        const uniforms = shader.uniforms;

        uniforms.set('uLightPosition', this.position.toArray());
        uniforms.set('uLightAmbient', this.ambient.toArray());
        uniforms.set('uLightDiffuse', this.diffuse.toArray());
        uniforms.set('uLightSpecular', this.specular.toArray());
    }

    private update (): void
    {
        this.isDirty = true;
    }

    destroy (): void
    {
        this.position.destroy();

        this.ambient.destroy();
        this.diffuse.destroy();
        this.specular.destroy();
    }
}
