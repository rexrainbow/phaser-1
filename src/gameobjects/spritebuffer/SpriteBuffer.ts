import { GameObject } from '../gameobject/GameObject';
import { Scene } from '../../scenes/Scene';
import { Texture } from '../../textures/Texture';
import { ISprite } from '../sprite/ISprite';
import { WebGLRenderer } from '../../renderer/webgl1/WebGLRenderer';
import { IShader } from '../../renderer/webgl1/shaders/IShader';
import { DeleteGLBuffer } from '../../renderer/webgl1/DeleteGLBuffer';
import { GameInstance } from '../../GameInstance';

export class SpriteBuffer extends GameObject
{
    /**
     * The Array Buffer.
     *
     * @type {ArrayBuffer}
     * @memberof SpriteBuffer
     */
    data: ArrayBuffer;

    /**
     * Float32 View of the Array Buffer.
     *
     * @type {Float32Array}
     * @memberof SpriteBuffer
     */
    vertexViewF32: Float32Array;

    /**
     * Uint32 View of the Array Buffer.
     *
     * @type {Uint32Array}
     * @memberof SpriteBuffer
     */
    vertexViewU32: Uint32Array;

    /**
     * The Element Array Buffer.
     *
     * @type {(Uint16Array|Uint32Array)}
     * @memberof SpriteBuffer
     */
    index: Uint16Array | Uint32Array;

    /**
     * The data array buffer.
     *
     * @type {WebGLBuffer}
     * @memberof SpriteBuffer
     */
    vertexBuffer: WebGLBuffer;

    /**
     * The element array buffer.
     *
     * @type {WebGLBuffer}
     * @memberof SpriteBuffer
     */
    indexBuffer: WebGLBuffer;

    size: number;
    maxSize: number;
    quadIndexSize: number;
    indexType: GLenum;
    texture: Texture;
    gl: WebGLRenderingContext;
    renderer: WebGLRenderer;
    shader: IShader;

    constructor (maxSize: number)
    {
        super();

        this.type = 'SpriteBuffer';

        const game = GameInstance.get();

        const renderer = game.renderer;

        this.renderer = renderer;
        this.gl = renderer.gl;
        this.shader = renderer.shader;

        this.resetBuffers(maxSize);
    }

    isRenderable (): boolean
    {
        return (this.willRender && this.visible && this.size > 0);
    }

    resetBuffers (maxSize: number)
    {
        const gl = this.gl;
        const shader = this.shader;
        const indexSize = shader.indexSize;

        this.indexType = gl.UNSIGNED_SHORT;

        if (maxSize > 65535)
        {
            if (!this.renderer.elementIndexExtension)
            {
                console.warn('OES uint element index unsupported. maxSize cannot exceed 65535');
                maxSize = 65535;
            }
            else
            {
                this.indexType = gl.UNSIGNED_INT;
            }
        }

        let ibo: number[] = [];
        
        //  Seed the index buffer
        for (let i: number = 0; i < (maxSize * indexSize); i += indexSize)
        {
            ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
        }

        this.data = new ArrayBuffer(maxSize * shader.quadByteSize);

        if (this.indexType === gl.UNSIGNED_SHORT)
        {
            this.index = new Uint16Array(ibo);
        }
        else
        {
            this.index = new Uint32Array(ibo);
        }

        this.vertexViewF32 = new Float32Array(this.data);
        this.vertexViewU32 = new Uint32Array(this.data);

        this.vertexViewF32.fill(0);

        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
       
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);

        //  Tidy-up
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        ibo = [];

        this.size = 0;
        this.maxSize = maxSize;
        this.quadIndexSize = shader.quadIndexSize;
        this.texture = null;
    }

    renderWebGL (renderer: WebGLRenderer, shader: IShader, startActiveTexture: number)
    {
        shader.flush();

        const gl = this.gl;

        this.shader.bindBuffers(this.indexBuffer, this.vertexBuffer);

        renderer.resetTextures(this.texture);

        if (this.dirtyRender)
        {
            gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);

            this.dirtyRender = false;
        }

        gl.drawElements(gl.TRIANGLES, this.size * this.quadIndexSize, this.indexType, 0);

        //  Restore
        shader.bindBuffers(shader.indexBuffer, shader.vertexBuffer);
    }

    /**
     * Adds a new entry into this SpriteBuffer.
     * 
     * A SpriteBuffer can only use one single Texture for all of its entries.
     * However, they can use any frame from that texture.
     * 
     * The most recent sprite added to this Sprite Buffer will determine the
     * Texture for all of the rest.
     * 
     * @param sprites 
     */
    add (...sprites: ISprite[]): this
    {
        const quadSize: number = this.shader.quadElementSize;
        const F32 = this.vertexViewF32;
        const U32 = this.vertexViewU32;

        sprites.forEach(sprite => {

            if (this.size < this.maxSize)
            {
                sprite.uploadBuffers(F32, U32, this.size * quadSize, false);
        
                this.texture = sprite.texture;
        
                this.size++;
            }
    
        });

        this.setDirtyRender(true);

        return this;
    }

    addAt (offset: number, ...sprites: ISprite[]): this
    {
        const quadSize: number = this.shader.quadElementSize;
        const F32 = this.vertexViewF32;
        const U32 = this.vertexViewU32;

        let index: number = offset;

        sprites.forEach(sprite => {

            if (index < this.maxSize)
            {
                sprite.uploadBuffers(F32, U32, index * quadSize, false);
        
                this.texture = sprite.texture;

                index++;

                if (index > this.size)
                {
                    this.size++;
                }
            }
    
        });

        this.setDirtyRender(true);

        return this;
    }

    clear (): this
    {
        this.resetBuffers(this.maxSize);

        return this;
    }

    destroy ()
    {
        this.data = null;
        this.vertexViewF32 = null;
        this.vertexViewU32 = null;
        this.index = null;
        this.texture = null;
        this.gl = null;
        this.renderer = null;
        this.shader = null;

        DeleteGLBuffer(this.vertexBuffer);
        DeleteGLBuffer(this.indexBuffer);

        //  Call before removing the Scene component :)
        // this.forceSceneRefresh();

        super.destroy();
    }
}
