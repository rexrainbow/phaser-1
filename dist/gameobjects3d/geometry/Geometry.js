import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/buffers/DeleteGLBuffer.js';
import '../../renderer/webgl1/buffers/VertexBuffer.js';
import { GetBufferFromVertexSet } from './GetBufferFromVertexSet.js';

class Geometry {
    constructor(data) {
        if (data) {
            if (data.hasOwnProperty('vertices')) {
                this.buffer = GetBufferFromVertexSet(data);
            }
            else {
                this.buffer = data;
            }
        }
    }
    destroy() {
        this.buffer.destroy();
    }
}

export { Geometry };
