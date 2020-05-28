import { GetHeight, GetResolution, GetWidth } from '../../../config/Size';

import { CreateFramebuffer } from '../fbo/CreateFramebuffer';
import { CreateProgram } from './CreateProgram';
import { CreateShader } from './CreateShader';
import { CreateUniforms } from './CreateUniforms';
import { GLTextureBinding } from '../textures/GLTextureBinding';
import { IShader } from './IShader';
import { IShaderAttributes } from './IShaderAttributes';
import { IShaderConfig } from './IShaderConfig';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { QuadIndexedBuffer } from '../buffers/QuadIndexedBuffer';
import { Texture } from '../../../textures/Texture';
import { WebGLRendererInstance } from '../WebGLRendererInstance';

export class Shader
{
    renderer: IWebGLRenderer;

    program: WebGLProgram;

    attribs: IShaderAttributes = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };

    uniforms: {} = {};

    uniformSetters: Map<string, Function>;

    //  TODO - Set by the parent shader
    buffer: QuadIndexedBuffer;

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

    constructor (config: IShaderConfig = {}, fragmentShader: string, vertexShader: string)
    {
        this.renderer = WebGLRendererInstance.get();

        const {
            batchSize = 4096,
            dataSize = 4,
            indexSize = 4,
            vertexElementSize = 6,
            quadIndexSize = 6,
            width = GetWidth(),
            height = GetHeight(),
            resolution = GetResolution(),
            renderToFBO = false
        } = config;

        this.buffer = new QuadIndexedBuffer(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize);

        this.create(fragmentShader, vertexShader);

        this.renderToFBO = renderToFBO;

        const texture = new Texture(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding(texture);

        texture.binding = binding;

        binding.framebuffer = CreateFramebuffer(binding.texture);

        this.texture = texture;
        this.framebuffer = binding.framebuffer;
    }

    create (fragmentShaderSource: string, vertexShaderSource: string): void
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

        //  TODO - CreateAttributes
        for (const key of Object.keys(this.attribs) as Array<keyof IShaderAttributes>)
        {
            const location = gl.getAttribLocation(program, key);

            gl.enableVertexAttribArray(location);

            this.attribs[key] = location;
        }
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

        //  TODO - Defined in the parent shader?
        // const config = {
        //     uProjectionMatrix,
        //     uCameraMatrix,
        //     uTexture
        // };

        const uniforms = this.uniforms;

        for (const [ name, setter ] of this.uniformSetters.entries())
        {
            setter(uniforms[name]);
        }

        // gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
        // gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);
        // gl.uniform1i(uniforms.uTexture, renderer.textures.textureIndex[textureID]);
        // gl.uniform1f(uniforms.uTime, performance.now());
        // gl.uniform2f(uniforms.uResolution, renderer.width, renderer.height);

        this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);

        return true;
    }

    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void
    {
        const gl = this.renderer.gl;
        const stride = this.buffer.vertexByteSize;
        const attribs = this.attribs;

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        //  attributes must be reset whenever you change buffers

        gl.vertexAttribPointer(attribs.aVertexPosition, 2, gl.FLOAT, false, stride, 0);     // size = 8
        gl.vertexAttribPointer(attribs.aTextureCoord, 2, gl.FLOAT, false, stride, 8);       // size = 8, offset = position
        gl.vertexAttribPointer(attribs.aTextureId, 1, gl.FLOAT, false, stride, 16);         // size = 4, offset = position + tex coord
        gl.vertexAttribPointer(attribs.aTintColor, 4, gl.UNSIGNED_BYTE, true, stride, 20);  // size = 4, offset = position + tex coord + index

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
}
