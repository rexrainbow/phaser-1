import {GetBufferFromVertexSet as GetBufferFromVertexSet2} from "./GetBufferFromVertexSet";
export class Geometry {
  constructor(data) {
    if (data) {
      if (data.hasOwnProperty("vertices")) {
        this.buffer = GetBufferFromVertexSet2(data);
      } else {
        this.buffer = data;
      }
    }
  }
  destroy() {
    this.buffer.destroy();
  }
}
