import { Flush, PopShader, PopVertexBuffer, SetShader, SetVertexBuffer } from '../renderer/webgl1/renderpass';
import { RGBCallback, Vec3Callback } from '../math/vec3';

import { AmbientLightShader } from '../renderer/webgl1/shaders/AmbientLightShader';
import { BaseWorld3D } from './BaseWorld3D';
import { Camera3D } from '../camera3d/Camera3D';
import { CreateWorld3DRenderData } from './CreateWorld3DRenderData';
import { ICamera3D } from '../camera3d/ICamera3D';
import { IRenderPass } from '../renderer/webgl1/renderpass/IRenderPass';
import { IScene } from '../scenes/IScene';
import { IShader } from '../renderer/webgl1/shaders/IShader';
import { IWorld3D } from './IWorld3D';
import { NewCamera3D } from '../camera3d/NewCamera3D';
import { VertexBuffer } from '../renderer/webgl1/buffers/VertexBuffer';

// export class World3D extends BaseWorld3D implements IWorld3D
export class World3D extends BaseWorld3D
{
    camera: NewCamera3D;

    enableCameraCull: boolean = true;

    shader: IShader;

    lightDirection: Vec3Callback;
    lightColor: RGBCallback;
    ambientColor: RGBCallback;

    private _lightDirection = [ 0.5, 3, 4 ];
    private _lightColor = [ 1, 1, 1 ];
    private _ambientColor = [ 0.2, 0.2, 0.2 ];

    constructor (scene: IScene)
    {
        super(scene);

        this.type = 'World3D';

        // this.camera = new Camera3D(0, 0, 4);
        this.camera = new NewCamera3D();

        this.shader = new AmbientLightShader();

        this.lightDirection = new Vec3Callback(v => this.updateLightDirection(v));
        this.lightColor = new RGBCallback(v => this.updateLightColor(v));
        this.ambientColor = new RGBCallback(v => this.updateAmbientColor(v));

        this.renderData = CreateWorld3DRenderData(this, this.camera);
    }

    private updateLightDirection (v: Vec3Callback): void
    {
        this._lightDirection = [ v.x, v.y, v.z ];
    }

    private updateLightColor (v: Vec3Callback): void
    {
        this._lightColor = [ v.x, v.y, v.z ];
    }

    private updateAmbientColor (v: Vec3Callback): void
    {
        this._ambientColor = [ v.x, v.y, v.z ];
    }

    renderGL <T extends IRenderPass> (renderPass: T): void
    {
        Flush(renderPass);

        const shader = this.shader;
        const camera = this.camera;
        const gl = renderPass.renderer.gl;

        const uniforms = shader.uniforms;

        uniforms.set('uViewProjectionMatrix', camera.viewProjectionMatrix.data);
        uniforms.set('uLightDirection', this._lightDirection);
        uniforms.set('uLightColor', this._lightColor);
        uniforms.set('uLightAmbient', this._ambientColor);

        //  TODO - Use fbo anyway to avoid z-fighting with World2D?
        // SetFramebuffer(renderPass, this.framebuffer, true);

        // SetVertexBuffer(renderPass, this.buffer);
        SetShader(renderPass, shader, 0);

        // BindTexture(this.cubeTexture);
        // const textureIndex = SetTexture(renderPass, this.cubeTexture);

        gl.enable(gl.DEPTH_TEST);

        //  TODO - This is a per Mesh property:
        // gl.enable(gl.CULL_FACE);

        this.renderList.forEach(entry =>
        {
            if (entry.children.length > 0)
            {
                this.renderNode(entry, renderPass);
            }
            else
            {
                entry.node.renderGL(renderPass);
            }
        });
    }

    postRenderGL <T extends IRenderPass> (renderPass: T): void
    {
        const gl = renderPass.renderer.gl;

        // Flush(renderPass);

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);

        // UnbindTexture(renderPass);

        // PopFramebuffer(renderPass);
        // PopVertexBuffer(renderPass);
        PopShader(renderPass);

        // DrawTexturedQuad(renderPass, this.texture);
    }
}
