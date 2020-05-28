import { IShaderAttributes } from './IShaderAttributes';
import { IShaderConfig } from './IShaderConfig';
import { IShaderUniforms } from './IShaderUniforms';
import { QuadIndexedBuffer } from '../buffers/QuadIndexedBuffer';
import { SINGLE_QUAD_FRAG } from '../glsl/SINGLE_QUAD_FRAG';
import { SINGLE_QUAD_VERT } from '../glsl/SINGLE_QUAD_VERT';
import { Shader } from './Shader';

export class SingleTextureQuadShader extends Shader
{
    attribs: IShaderAttributes = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };
    uniforms: IShaderUniforms = { uProjectionMatrix: 0, uCameraMatrix: 0, uTexture: 0, uTime: 0, uResolution: 0 };

    buffer: QuadIndexedBuffer;

    constructor (config: IShaderConfig = {})
    {
        super(config, SINGLE_QUAD_FRAG, SINGLE_QUAD_VERT);

        /*
        this.renderer = WebGLRendererInstance.get();

        const {
            batchSize = 4096,
            dataSize = 4,
            indexSize = 4,
            vertexElementSize = 6,
            quadIndexSize = 6,
            fragmentShader = shaderSource.fragmentShader,
            vertexShader = shaderSource.vertexShader,
            width = GetWidth(),
            height = GetHeight(),
            resolution = GetResolution(),
            renderToFBO = false
        } = config;

        this.buffer = new QuadIndexedBuffer(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize);

        this.createShaders(fragmentShader, vertexShader);

        this.count = 0;

        this.renderToFBO = renderToFBO;

        const texture = new Texture(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding(texture);

        texture.binding = binding;

        binding.framebuffer = CreateFramebuffer(binding.texture);

        this.texture = texture;
        this.framebuffer = binding.framebuffer;
        */
    }

}
