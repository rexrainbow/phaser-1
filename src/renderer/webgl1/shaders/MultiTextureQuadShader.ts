import { GetMaxTextures } from '../../../config/MaxTextures';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { SingleTextureQuadShader } from './SingleTextureQuadShader';

const fragmentShader = `
precision highp float;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

uniform sampler2D uTexture[%count%];

void main (void)
{
    vec4 color;
    %forloop%

    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
}`;

export class MultiTextureQuadShader extends SingleTextureQuadShader implements IShader
{
    maxTextures: number = 0;

    constructor (config: IShaderConfig = { fragmentShader, maxTextures: GetMaxTextures() })
    {
        super(config);
    }

    createShaders (fragmentShaderSource: string, vertexShaderSource: string): void
    {
        const maxTextures = this.maxTextures;

        let src = '';

        if (maxTextures > 1)
        {
            for (let i = 0; i < maxTextures; i++)
            {
                if (i > 0)
                {
                    src += '\nelse ';
                }

                if (i < maxTextures - 1)
                {
                    src += `if (vTextureId < ${i}.5)`;
                }

                src += '\n{';
                src += `\n  color = texture2D(uTexture[${i}], vTextureCoord);`;
                src += '\n}';
            }
        }
        else
        {
            src = 'color = texture2D(uTexture[0], vTextureCoord);';
        }

        fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);
        fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);

        super.createShaders(fragmentShaderSource, vertexShaderSource);
    }

    bind (renderer: IWebGLRenderer, projectionMatrix: Float32Array, cameraMatrix: Float32Array): void
    {
        const gl = this.gl;
        const uniforms = this.uniforms;

        gl.useProgram(this.program);

        gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);
        gl.uniform1iv(uniforms.uTexture, renderer.textures.textureIndex);

        this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);
    }
}
