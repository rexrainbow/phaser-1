import { GL } from '../GL';

export class IndexedBuffer
{
    /**
     * Maximum number of quads per batch before a flush takes place.
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
     * The size, in bytes, of a single quad in the array buffer.
     *
     * This is `vertexByteSize * 4`.
     *
     * @type {number}
     */
    quadByteSize: number;

    /**
     * The size, in quantity of elements, of a single quad in the element index array.
     *
     * This is `vertexElementSize * 4`.
     *
     * @type {number}
     */
    quadElementSize: number;

    /**
     * The total number of entries per quad in the element index array.
     *
     * The IBO contains 6 entries per quad:
     *
     * 0, 1, 2
     * 2, 3, 0
     *
     * @type {number}
     */
    quadIndexSize: number;

    /**
     * The size, in bytes, of the Array Buffer.
     *
     * This is `batchSize * quadByteSize`
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

    constructor (batchSize: number, dataSize: number, indexSize: number, vertexElementSize: number, quadIndexSize: number)
    {
        this.batchSize = batchSize;
        this.dataSize = dataSize;
        this.indexSize = indexSize;
        this.vertexElementSize = vertexElementSize;
        this.quadIndexSize = quadIndexSize;

        //  Derive the remaining values
        this.vertexByteSize = vertexElementSize * dataSize;
        this.quadByteSize = this.vertexByteSize * 4;
        this.quadElementSize = vertexElementSize * 4;
        this.bufferByteSize = batchSize * this.quadByteSize;

        this.create();
    }

    create (): void
    {
        let ibo: number[] = [];

        //  Seed the index buffer
        for (let i = 0; i < (this.batchSize * this.indexSize); i += this.indexSize)
        {
            ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
        }

        this.data = new ArrayBuffer(this.bufferByteSize);
        this.index = new Uint16Array(ibo);

        this.vertexViewF32 = new Float32Array(this.data);
        this.vertexViewU32 = new Uint32Array(this.data);

        const gl = GL.get();

        this.vertexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.DYNAMIC_DRAW);

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
