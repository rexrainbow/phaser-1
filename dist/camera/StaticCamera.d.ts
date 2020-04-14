import WebGLRenderer from '../renderer/WebGLRenderer';
import Rectangle from '../geom/Rectangle';
import IBaseScene from '../scenes/IBaseScene';
export default class StaticCamera {
    scene: IBaseScene;
    matrix: Float32Array;
    renderer: WebGLRenderer;
    width: number;
    height: number;
    bounds: Rectangle;
    constructor(scene: IBaseScene);
    reset(): void;
    destroy(): void;
}
//# sourceMappingURL=StaticCamera.d.ts.map