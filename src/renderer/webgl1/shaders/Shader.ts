import { GetHeight, GetResolution, GetWidth } from '../../../config/Size';

import { CreateAttributes } from './CreateAttributes';
import { CreateDepthBuffer } from '../fbo/CreateDepthBuffer';
import { CreateFramebuffer } from '../fbo/CreateFramebuffer';
import { CreateProgram } from './CreateProgram';
import { CreateShader } from './CreateShader';
import { CreateUniforms } from './CreateUniforms';
import { DefaultQuadAttributes } from './DefaultQuadAttributes';
import { DefaultQuadUniforms } from './DefaultQuadUniforms';
import { DeleteFramebuffer } from '../fbo/DeleteFramebuffer';
import { DeleteGLTexture } from '../textures/DeleteGLTexture';
import { DeleteShaders } from './DeleteShaders';
import { GLTextureBinding } from '../textures/GLTextureBinding';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { IVertexAttribPointer } from './IVertexAttribPointer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { SINGLE_QUAD_FRAG } from '../glsl/SINGLE_QUAD_FRAG';
import { SINGLE_QUAD_VERT } from '../glsl/SINGLE_QUAD_VERT';
import { Texture } from '../../../textures/Texture';
import { WebGLRendererInstance } from '../WebGLRendererInstance';

export class Shader implements IShader
{
    renderer: IWebGLRenderer;

    program: WebGLProgram;

    attributes: Map<string, IVertexAttribPointer>;

    uniforms: Map<string, unknown>;

    uniformSetters: Map<string, Function>;

    texture: Texture;

    framebuffer: WebGLFramebuffer;

    renderToFramebuffer: boolean = false;

    renderToDepthbuffer: boolean = false;

    constructor (config: IShaderConfig = {})
    {
        this.renderer = WebGLRendererInstance.get();

        const {
            attributes = DefaultQuadAttributes,
            fragmentShader = SINGLE_QUAD_FRAG,
            height = GetHeight(),
            renderToFramebuffer = false,
            renderToDepthbuffer = false,
            resolution = GetResolution(),
            vertexShader = SINGLE_QUAD_VERT,
            width = GetWidth(),
            uniforms = DefaultQuadUniforms
        } = config;

        this.create(fragmentShader, vertexShader, uniforms, attributes);

        if (renderToFramebuffer)
        {
            this.renderToFramebuffer = true;

            const texture = new Texture(null, width * resolution, height * resolution);
            const binding = new GLTextureBinding(texture);

            texture.binding = binding;

            binding.framebuffer = CreateFramebuffer(binding.texture);

            if (renderToDepthbuffer)
            {
                this.renderToDepthbuffer = true;

                binding.depthbuffer = CreateDepthBuffer(binding.framebuffer, texture.width, texture.height);
            }

            this.texture = texture;
            this.framebuffer = binding.framebuffer;
        }
    }

    create (fragmentShaderSource: string, vertexShaderSource: string, uniforms: {}, attribs: {}): void
    {
        const gl = this.renderer.gl;

        const fragmentShader = CreateShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
        const vertexShader = CreateShader(gl, vertexShaderSource, gl.VERTEX_SHADER);

        if (!fragmentShader || !vertexShader)
        {
            return;
        }

        const program = CreateProgram(gl, fragmentShader, vertexShader);

        if (!program)
        {
            return;
        }

        const currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        gl.useProgram(program);

        this.program = program;

        this.uniformSetters = CreateUniforms(gl, program);

        this.uniforms = new Map();

        //  Copy starting values from the config object to the uniforms map
        for (const [ key, value ] of Object.entries(uniforms))
        {
            this.uniforms.set(key, value);
        }

        this.attributes = CreateAttributes(gl, program, attribs);

        gl.useProgram(currentProgram);
    }

    updateUniforms (): void
    {
        //  Use this to set any extra uniform values prior to the bind
    }

    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array): boolean
    {
        const uniforms = this.uniforms;

        uniforms.set('uProjectionMatrix', uProjectionMatrix);
        uniforms.set('uCameraMatrix', uCameraMatrix);

        this.updateUniforms();

        return this.setUniforms();
    }

    setUniforms (): boolean
    {
        if (!this.program)
        {
            return false;
        }

        const gl = this.renderer.gl;

        gl.useProgram(this.program);

        const uniforms = this.uniforms;

        for (const [ name, setter ] of this.uniformSetters.entries())
        {
            setter(uniforms.get(name));
        }

        return true;
    }

    //  stride = vertexByteSize
    setAttributes (stride: number): void
    {
        const gl = this.renderer.gl;

        this.attributes.forEach(attrib =>
        {
            gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
        });
    }

    destroy (): void
    {
        DeleteShaders(this.program);
        DeleteGLTexture(this.texture);
        DeleteFramebuffer(this.framebuffer);

        this.uniforms.clear();
        this.uniformSetters.clear();
        this.attributes.clear();

        this.renderer = null;
        this.program = null;
        this.texture = null;
        this.framebuffer = null;
    }
}
