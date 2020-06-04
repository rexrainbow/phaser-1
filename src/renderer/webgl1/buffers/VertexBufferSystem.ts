import { IVertexBuffer } from './IVertexBuffer';
import { IVertexBufferConfig } from './IVertexBufferConfig';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { IndexedVertexBuffer } from './IndexedVertexBuffer';
import { VertexBuffer } from './VertexBuffer';

export class VertexBufferSystem
{
    renderer: IWebGLRenderer;

    stack: IVertexBuffer[];

    current: IVertexBuffer = null;

    isDefaultBound: boolean = false;

    constructor (renderer: IWebGLRenderer, currentBuffer: IVertexBuffer)
    {
        this.renderer = renderer;

        this.stack = [ currentBuffer ];

        this.current = currentBuffer;
    }

    create (config: IVertexBufferConfig = {}): IVertexBuffer
    {
        const {
            batchSize = 1,
            dataSize = 4,
            entryIndexSize = 0,
            indexLayout = null,
            indexSize = 0,
            quantity = 4,
            vertexElementSize = 6
        } = config;

        if (indexSize > 0)
        {
            return new IndexedVertexBuffer(batchSize, dataSize, indexSize, vertexElementSize, entryIndexSize, quantity, indexLayout);
        }
        else
        {
            return new VertexBuffer(batchSize, dataSize, vertexElementSize, quantity);
        }
    }

    setDefault (): void
    {
        // if (!this.isDefaultBound)
        // {
            this.current = this.stack[0];

            this.current.bind();

            this.isDefaultBound = true;
        // }
    }

    set (buffer: IVertexBuffer): IVertexBuffer
    {
        this.stack.push(buffer);

        this.current = buffer;

        this.isDefaultBound = false;

        buffer.bind();

        return buffer;
    }

    pop (): void
    {
        const stack = this.stack;

        if (stack.length > 1)
        {
            //  We never pop the default buffer off the stack
            stack.pop();
        }

        this.current = stack[stack.length - 1];

        this.current.bind();

        this.isDefaultBound = false;
    }

    clear (): void
    {
        //  TODO
    }

    destroy (): void
    {
        //  TODO
    }
}
