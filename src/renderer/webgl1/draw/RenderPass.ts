import { BufferEntry } from './BufferEntry';
import { FBOSystem } from '../fbo/FBOSystem';
import { IRenderPass } from './IRenderPass';
import { IShader } from '../shaders/IShader';
import { IShaderConstructor } from '../shaders/IShaderConstructor';
import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { ShaderSystem } from '../shaders';
import { Texture } from '../../../textures/Texture';
import { TextureSystem } from '../textures/TextureSystem';
import { VertexBufferSystem } from '../buffers/VertexBufferSystem';

export class RenderPass implements IRenderPass
{
    renderer: IWebGLRenderer;

    buffer: VertexBufferSystem;
    shader: ShaderSystem;
    fbo: FBOSystem;
    textures: TextureSystem;

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

    flushTotal: number;

    constructor (renderer: IWebGLRenderer, defaultBuffer: IVertexBuffer, defaultShader: IShaderConstructor)
    {
        this.renderer = renderer;

        this.textures = new TextureSystem(renderer);

        this.buffer = new VertexBufferSystem(renderer, defaultBuffer);

        this.shader = new ShaderSystem(renderer, defaultShader);

        this.fbo = new FBOSystem(renderer);
    }

    init (): void
    {
        this.textures.init();
    }

    getBuffer (addToCount: number = 0): BufferEntry
    {
        //  If batch full, flush it

        const buffer = this.buffer.current;

        if (this.count + addToCount >= buffer.batchSize)
        {
            this.flush();
        }

        const offset = (buffer.indexed) ? this.count * buffer.entryElementSize : this.count * buffer.vertexElementSize;

        this.count += addToCount;

        return {
            buffer,
            F32: buffer.vertexViewF32,
            U32: buffer.vertexViewU32,
            offset
        };
    }

    reset (): void
    {
        const renderer = this.renderer;

        const gl = renderer.gl;

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, renderer.width, renderer.height);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        this.textures.update();

        this.flushTotal = 0;
    }

    begin (): void
    {
        //  Binds default shader and setsUniforms
        this.shader.setDefault();

        //  Binds default vertex buffer
        this.buffer.setDefault();

        //  Sets shader attributes
        this.shader.current.setAttributes(this.buffer.current.vertexByteSize);

        this.count = 0;
    }

    end (): void
    {
        this.flush();
    }

    requestTexture (texture: Texture): number
    {
        return this.textures.request(texture);
    }

    bindTexture (texture: Texture, index: number = 0): void
    {
        this.textures.bind(texture, index);
    }

    unbindTexture (index: number = 0): void
    {
        this.textures.unbind(index);
    }

    setVertexBuffer (buffer: IVertexBuffer): IVertexBuffer
    {
        return this.buffer.set(buffer);
    }

    popVertexBuffer (): void
    {
        this.buffer.pop();
    }

    setShader (shader: IShader, textureID?: number): boolean
    {
        this.flush();

        return this.shader.set(shader, textureID);
    }

    popShader (): void
    {
        this.flush();

        this.shader.pop();
    }

    popShaderAndRebind (): void
    {
        this.flush();

        this.shader.popAndRebind();
    }

    setFramebuffer (framebuffer: WebGLFramebuffer, clear: boolean = true, width: number = 0, height: number = 0): void
    {
        this.fbo.set(framebuffer, clear, width, height);
    }

    popFramebuffer (): void
    {
        this.fbo.pop();
    }

    setBuffers (vertexBuffer: WebGLBuffer, indexBuffer?: WebGLBuffer): void
    {
        const gl = this.renderer.gl;

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
        this.shader.current.setAttributes(this.buffer.current.vertexByteSize);

        this.count = 0;
    }

    draw (count: number): void
    {
        const buffer = this.buffer.current;
        const shader = this.shader.current;

        const renderer = this.renderer;
        const fbo = this.fbo;

        const gl = renderer.gl;

        if (shader.renderToFramebuffer)
        {
            fbo.add(shader.framebuffer, true);
        }

        if (count === buffer.batchSize)
        {
            gl.bufferData(gl.ARRAY_BUFFER, buffer.data, gl.DYNAMIC_DRAW);
        }
        else
        {
            const subsize = (buffer.indexed) ? count * buffer.entryElementSize : count * buffer.vertexElementSize;

            const view = buffer.vertexViewF32.subarray(0, subsize);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        }

        if (buffer.indexed)
        {
            gl.drawElements(gl.TRIANGLES, count * buffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);
        }
        else
        {
            gl.drawArrays(gl.TRIANGLES, 0, count);
        }

        if (shader.renderToFramebuffer)
        {
            fbo.pop();
        }
    }

    flush (rebindShaders: boolean = false): boolean
    {
        const count = this.count;

        if (count === 0)
        {
            return false;
        }

        this.draw(count);

        this.prevCount = count;

        this.count = 0;

        if (rebindShaders)
        {
            //  ?
        }

        return true;
    }

    destroy (): void
    {

    }
}
