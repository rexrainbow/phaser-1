import { GetHeight, GetResolution, GetWidth } from '../../../config/Size';

import { CreateAttributes } from './CreateAttributes';
import { CreateFramebuffer } from '../fbo/CreateFramebuffer';
import { CreateProgram } from './CreateProgram';
import { CreateShader } from './CreateShader';
import { CreateUniforms } from './CreateUniforms';
import { DefaultAttributes } from './DefaultAttributes';
import { DeleteFramebuffer } from '../fbo/DeleteFramebuffer';
import { DeleteGLTexture } from '../textures/DeleteGLTexture';
import { DeleteShaders } from './DeleteShaders';
import { GLTextureBinding } from '../textures/GLTextureBinding';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
import { IVertexAttribPointer } from './IVertexAttribPointer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedBuffer } from '../buffers/IndexedBuffer';
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

    buffer: IndexedBuffer;

    /**
     * The total number of quads added to the batch so far.
     * Reset every bind and flush.
     *
     * @type {number}
     */
    count: number = 0;

    /**
     * The total number of quads previously flushed.
     *
     * @type {number}
     */
    prevCount: number = 0;

    texture: Texture;
    framebuffer: WebGLFramebuffer;

    renderToFBO: boolean = false;

    constructor (config: IShaderConfig = {})
    {
        this.renderer = WebGLRendererInstance.get();

        const {
            attributes = DefaultAttributes,
            batchSize = 4096,
            dataSize = 4,
            entryIndexSize = 6,
            fragmentShader = SINGLE_QUAD_FRAG,
            height = GetHeight(),
            indexLayout = [ 0, 1, 2, 2, 3, 0 ],
            indexSize = 4,
            quantity = 4,
            renderToFBO = false,
            resolution = GetResolution(),
            vertexElementSize = 6,
            vertexShader = SINGLE_QUAD_VERT,
            width = GetWidth(),
            uniforms = { uProjectionMatrix: new Float32Array(), uCameraMatrix: new Float32Array(), uTexture: 0 }
        } = config;

        this.buffer = new IndexedBuffer(batchSize, dataSize, indexSize, vertexElementSize, entryIndexSize, quantity, indexLayout);

        this.create(fragmentShader, vertexShader, uniforms, attributes);

        this.renderToFBO = renderToFBO;

        const texture = new Texture(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding(texture);

        texture.binding = binding;

        binding.framebuffer = CreateFramebuffer(binding.texture);

        this.texture = texture;
        this.framebuffer = binding.framebuffer;
    }

    create (fragmentShaderSource: string, vertexShaderSource: string, uniforms: Object, attribs: Object): void
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
    }

    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture?: number): boolean
    {
        const uniforms = this.uniforms;

        uniforms.set('uProjectionMatrix', uProjectionMatrix);
        uniforms.set('uCameraMatrix', uCameraMatrix);

        if (uTexture)
        {
            uniforms.set('uTexture', uTexture);
        }

        return this.updateUniforms();
    }

    updateUniforms (): boolean
    {
        if (!this.program)
        {
            return false;
        }

        const renderer = this.renderer;
        const gl = renderer.gl;

        gl.useProgram(this.program);

        const uniforms = this.uniforms;

        for (const [ name, setter ] of this.uniformSetters.entries())
        {
            setter(uniforms.get(name));
        }

        this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);

        return true;
    }

    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void
    {
        const gl = this.renderer.gl;
        const stride = this.buffer.vertexByteSize;

        //  attributes must be reset whenever you change buffers
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        this.attributes.forEach(attrib =>
        {
            gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
        });

        this.count = 0;
    }

    draw (count: number): void
    {
        const renderer = this.renderer;
        const gl = renderer.gl;
        const buffer = this.buffer;

        if (count === buffer.batchSize)
        {
            gl.bufferData(gl.ARRAY_BUFFER, buffer.data, gl.DYNAMIC_DRAW);
        }
        else
        {
            const view = buffer.vertexViewF32.subarray(0, count * buffer.entryElementSize);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        }

        if (this.renderToFBO)
        {
            renderer.fbo.add(this.framebuffer, true);
        }

        gl.drawElements(gl.TRIANGLES, count * buffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);

        if (this.renderToFBO)
        {
            renderer.fbo.pop();
        }
    }

    flush (): boolean
    {
        const count = this.count;

        if (count === 0)
        {
            return false;
        }

        this.draw(count);

        this.prevCount = count;

        this.count = 0;

        return true;
    }

    destroy (): void
    {
        this.buffer.destroy();

        DeleteShaders(this.program);
        DeleteGLTexture(this.texture);
        DeleteFramebuffer(this.framebuffer);

        this.uniforms.clear();
        this.uniformSetters.clear();
        this.attributes.clear();

        this.renderer = null;
        this.buffer = null;
        this.program = null;
        this.texture = null;
        this.framebuffer = null;
    }
}
