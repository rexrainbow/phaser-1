import { GL } from '../GL';

export class IndexedBuffer
{
    /**
     * Maximum number of entries per batch before a flush takes place.
     *
     * @type {number}
     */
    batchSize: number;

    /**
     * The size, in bytes, per entry in the array buffer.
     *
     * @type {number}
     */
    dataSize: number;

    /**
     * The size, in bytes, per entry in the element index array.
     *
     * @type {number}
     */
    indexSize: number;

    /**
     * The amount of elements / floats a single vertex consists of.
     *
     * The default is 6:
     *
     * position (x,y - 2 floats)
     * texture coord (x,y - 2 floats)
     * texture index (uint)
     * packed color (uint)
     *
     * @type {number}
     */
    vertexElementSize: number;

    /**
     * The size, in bytes, of a single vertex in the array buffer.
     *
     * This is `vertexElementSize * dataSize`.
     *
     * @type {number}
     */
    vertexByteSize: number;

    /**
     * The size, in bytes, of a single entry in the array buffer.
     *
     * This is `vertexByteSize * 4` for a quad.
     *
     * @type {number}
     */
    entryByteSize: number;

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
     * The size, in bytes, of the Array Buffer.
     *
     * This is `batchSize * entryByteSize`
     *
     * @type {number}
     */
    bufferByteSize: number;

    /**
     * The Array Buffer.
     *
     * @type {ArrayBuffer}
     */
    data: ArrayBuffer;

    /**
     * Float32 View of the Array Buffer.
     *
     * @type {Float32Array}
     */
    vertexViewF32: Float32Array;

    /**
     * Uint32 View of the Array Buffer.
     *
     * @type {Uint32Array}
     */
    vertexViewU32: Uint32Array;

    /**
     * The Element Array Buffer.
     *
     * @type {Uint16Array}
     */
    index: Uint16Array;

    /**
     * The data array buffer.
     *
     * @type {WebGLBuffer}
     */
    vertexBuffer: WebGLBuffer;

    /**
     * The element array buffer.
     *
     * @type {WebGLBuffer}
     */
    indexBuffer: WebGLBuffer;

    constructor (batchSize: number, dataSize: number, indexSize: number, vertexElementSize: number, entryIndexSize: number, quantity: number)
    {
        this.batchSize = batchSize;
        this.dataSize = dataSize;
        this.indexSize = indexSize;
        this.vertexElementSize = vertexElementSize;
        this.vertexByteSize = vertexElementSize * dataSize;
        this.entryIndexSize = entryIndexSize;

        //  Derive the remaining values
        this.entryByteSize = this.vertexByteSize * quantity;
        this.entryElementSize = vertexElementSize * quantity;
        this.bufferByteSize = batchSize * this.entryByteSize;
    }

    create (ibo: number[]): void
    {
        const data = new ArrayBuffer(this.bufferByteSize);

        this.data = data;
        this.index = new Uint16Array(ibo);

        this.vertexViewF32 = new Float32Array(data);
        this.vertexViewU32 = new Uint32Array(data);

        const gl = GL.get();

        this.vertexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);

        this.indexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);

        //  Tidy-up
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        ibo = [];
    }

    destroy (): void
    {
    }
}
