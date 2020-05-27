import { IndexedBuffer } from './IndexedBuffer';

export class QuadIndexedBuffer extends IndexedBuffer
{
    constructor (batchSize: number, dataSize: number, indexSize: number, vertexElementSize: number, quadIndexSize: number)
    {
        super(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize, 4);

        const ibo: number[] = [];

        //  Seed the index buffer
        for (let i = 0; i < (batchSize * indexSize); i += indexSize)
        {
            ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
        }

        this.create(ibo);
    }
}
