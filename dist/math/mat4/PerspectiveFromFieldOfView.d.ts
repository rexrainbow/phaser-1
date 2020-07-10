import { Matrix4 } from './Matrix4';
export declare type FOV = {
    upDegrees: number;
    downDegrees: number;
    leftDegrees: number;
    rightDegrees: number;
};
export declare function PerspectiveFromFieldOfView(fov: FOV, near: number, far: number, out?: Matrix4): Matrix4;
//# sourceMappingURL=PerspectiveFromFieldOfView.d.ts.map