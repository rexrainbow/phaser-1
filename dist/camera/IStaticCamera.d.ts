import Scene from '../scenes/Scene';
import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import Rectangle from '../geom/Rectangle';
export default interface IStaticCamera {
    scene: Scene;
    matrix: Float32Array;
    renderer: WebGLRenderer;
    bounds: Rectangle;
    reset(): void;
    update(delta: number, time: number): void;
    updateTransform(): this;
    render(gameFrame: number): void;
    destroy(): void;
}
//# sourceMappingURL=IStaticCamera.d.ts.map