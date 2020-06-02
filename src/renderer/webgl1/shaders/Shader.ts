import { GetHeight, GetResolution, GetWidth } from '../../../config/Size';

import { CreateAttributes } from './CreateAttributes';
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
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedVertexBuffer } from '../buffers/IndexedVertexBuffer';
import { SINGLE_QUAD_FRAG } from '../glsl/SINGLE_QUAD_FRAG';
import { SINGLE_QUAD_VERT } from '../glsl/SINGLE_QUAD_VERT';
import { Texture } from '../../../textures/Texture';
import { VertexBuffer } from '../buffers/VertexBuffer';
import { WebGLRendererInstance } from '../WebGLRendererInstance';

export class Shader implements IShader
{
    renderer: IWebGLRenderer;

    program: WebGLProgram;

    attributes: Map<string, IVertexAttribPointer>;

    uniforms: Map<string, unknown>;

    uniformSetters: Map<string, Function>;

    buffer: IVertexBuffer;

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
            attributes = DefaultQuadAttributes,
            batchSize = 1,
            dataSize = 4,
            entryIndexSize = 0,
            fragmentShader = SINGLE_QUAD_FRAG,
            height = GetHeight(),
            indexLayout = null,
            indexSize = 0,
            quantity = 4,
            renderToFBO = false,
            resolution = GetResolution(),
            vertexElementSize = 6,
            vertexShader = SINGLE_QUAD_VERT,
            width = GetWidth(),
            uniforms = DefaultQuadUniforms
        } = config;

        if (indexSize > 0)
        {
            this.buffer = new IndexedVertexBuffer(batchSize, dataSize, indexSize, vertexElementSize, entryIndexSize, quantity, indexLayout);
        }
        else
        {
            this.buffer = new VertexBuffer(batchSize, dataSize, vertexElementSize, quantity);
        }

        this.create(fragmentShader, vertexShader, uniforms, attributes);

        if (renderToFBO)
        {
            this.renderToFBO = true;

            const texture = new Texture(null, width * resolution, height * resolution);
            const binding = new GLTextureBinding(texture);

            texture.binding = binding;

            binding.framebuffer = CreateFramebuffer(binding.texture);

            this.texture = texture;
            this.framebuffer = binding.framebuffer;
        }
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

        if (this.setUniforms())
        {
            this.bindBuffers();

            return true;
        }

        return false;
    }

    setUniforms (): boolean
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

        return true;
    }

    setBuffers (vertexBuffer: WebGLBuffer, indexBuffer?: WebGLBuffer): void
    {
        const gl = this.renderer.gl;
        const stride = this.buffer.vertexByteSize;

        if (indexBuffer)
        {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        }
        else
        {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        //  attributes must be reset whenever you change buffers
        this.attributes.forEach(attrib =>
        {
            gl.vertexAttribPointer(attrib.index, attrib.size, attrib.type, attrib.normalized, stride, attrib.offset);
        });

        this.count = 0;
    }

    bindBuffers (): void
    {
        const buffer = this.buffer;
        const gl = this.renderer.gl;

        const stride = buffer.vertexByteSize;
        const indexBuffer = buffer.indexBuffer;
        const vertexBuffer = buffer.vertexBuffer;

        if (indexBuffer)
        {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        }
        else
        {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        //  attributes must be reset whenever you change buffers
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

        if (buffer.entryIndexSize > 0)
        {
            gl.drawElements(gl.TRIANGLES, count * buffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);
        }
        else
        {
            gl.drawArrays(gl.TRIANGLES, 0, count * 6);
        }

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
