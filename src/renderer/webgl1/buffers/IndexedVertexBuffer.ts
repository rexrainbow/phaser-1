import { DeleteGLBuffer } from './DeleteGLBuffer';
import { GL } from '../GL';
import { VertexBuffer } from './VertexBuffer';

export class IndexedVertexBuffer extends VertexBuffer
{
    /**
     * The size, in bytes, per entry in the element index array.
     *
     * @type {number}
     */
    indexSize: number;

    /**
     * The size, in quantity of elements, of a single entry in the element index array.
     *
     * This is `vertexElementSize * 4` for a quad.
     *
     * @type {number}
     */
    entryElementSize: number;

    /**
     * The total number of entries per entry in the element index array.
     *
     * For a quad, the IBO contains 6 entries per entry:
     *
     * 0, 1, 2
     * 2, 3, 0
     *
     * @type {number}
     */
    entryIndexSize: number;

    /**
     * The Element Array Buffer.
     *
     * @type {Uint16Array}
     */
    index: Uint16Array;

    /**
     * The element array buffer.
     *
     * @type {WebGLBuffer}
     */
    indexBuffer: WebGLBuffer;

    indexLayout: number[];

    indexed: boolean = true;

    //  quantity = number of elements per entry
    constructor (batchSize: number, dataSize: number, indexSize: number, vertexElementSize: number, entryIndexSize: number, quantity: number, indexLayout?: number[])
    {
        super(batchSize, dataSize, vertexElementSize, quantity);

        this.indexSize = indexSize;
        this.entryIndexSize = entryIndexSize;

        //  Derive the remaining values
        this.entryElementSize = vertexElementSize * quantity;

        const seededIndexBuffer = [];

        if (indexLayout)
        {
            this.indexLayout = indexLayout;

            //  Seed the index buffer
            for (let i = 0; i < (batchSize * indexSize); i += indexSize)
            {
                for (let c = 0; c < indexLayout.length; c++)
                {
                    seededIndexBuffer.push(i + indexLayout[c]);
                }
            }
        }

        this.create();
        this.createIndexBuffer(seededIndexBuffer);
    }

    createIndexBuffer (seededIndex: number[]): void
    {
        this.index = new Uint16Array(seededIndex);

        const gl = GL.get();

        this.indexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);

        //  Free memory
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        seededIndex = [];
    }

    destroy (): void
    {
        super.destroy();

        DeleteGLBuffer(this.indexBuffer);

        this.index = null;
        this.indexLayout = null;
        this.indexBuffer = null;
    }
}
