import { GetHeight, GetResolution, GetWidth } from '../../../config/Size';

import { CreateFramebuffer } from '../fbo/CreateFramebuffer';
import { CreateProgram } from './CreateProgram';
import { CreateShader } from './CreateShader';
import { CreateUniforms } from './CreateUniforms';
import { GLTextureBinding } from '../textures/GLTextureBinding';
import { IDefaultAttribs } from './IDefaultAttribs';
import { IShader } from './IShader';
import { IShaderConfig } from './IShaderConfig';
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

    attributes: Object;

    uniforms: Object;

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
            attributes = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 },
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

        this.attributes = attributes;
        this.uniforms = uniforms;

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

        //  TODO - Turn this into CreateAttributes
        const attribs = this.attributes;

        for (const key of Object.keys(attribs) as Array<keyof IDefaultAttribs>)
        {
            const location = gl.getAttribLocation(program, key);

            gl.enableVertexAttribArray(location);

            attribs[key] = location;
        }
    }

    bind (uProjectionMatrix: Float32Array, uCameraMatrix: Float32Array, uTexture?: number): boolean
    {
        const uniforms = this.uniforms;

        uniforms['uProjectionMatrix'] = uProjectionMatrix;
        uniforms['uCameraMatrix'] = uCameraMatrix;

        if (uTexture)
        {
            uniforms['uTexture'] = uTexture;
        }

        return this.setUniforms();
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
        const attribs = this.attributes as IDefaultAttribs;

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
