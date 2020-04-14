import TransformGameObject from '../gameobjects/transformgameobject/TransformGameObject';
import WebGLRenderer from '../renderer/WebGLRenderer';
export default class Camera extends TransformGameObject {
    matrix: Float32Array;
    renderer: WebGLRenderer;
    constructor(x?: number, y?: number);
    updateTransform(): this;
    reset(): void;
    destroy(): void;
}
//# sourceMappingURL=Camera.d.ts.map