import { IShader } from './IShader';
import { IShaderAttributes } from './IShaderAttributes';
import { IShaderConfig } from './IShaderConfig';
import { IShaderUniforms } from './IShaderUniforms';
import { QuadIndexedBuffer } from '../buffers/QuadIndexedBuffer';
import { SINGLE_QUAD_FRAG } from '../glsl/SINGLE_QUAD_FRAG';
import { SINGLE_QUAD_VERT } from '../glsl/SINGLE_QUAD_VERT';
import { Shader } from './Shader';

export class SingleTextureQuadShader extends Shader implements IShader
{
    // attribs: IShaderAttributes = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };
    // uniforms: IShaderUniforms = { uProjectionMatrix: 0, uCameraMatrix: 0, uTexture: 0, uTime: 0, uResolution: 0 };
    // buffer: QuadIndexedBuffer;

    uniforms: { uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture: number };

    constructor (config: IShaderConfig = {})
    {
        super(config, SINGLE_QUAD_FRAG, SINGLE_QUAD_VERT);
    }

    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture: number): boolean
    {
        this.uniforms.uProjectionMatrix = uProjectionMatrix;
        this.uniforms.uCameraMatrix = uCameraMatrix;
        this.uniforms.uTexture = uTexture;

        return this.setUniforms();
    }
}
