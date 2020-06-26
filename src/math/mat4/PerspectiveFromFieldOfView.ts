import { Matrix4 } from './Matrix4';

//  Generates a perspective projection matrix with the given bounds.
//  Passing null/undefined/no value for far will generate infinite projection matrix.

export type FOV = {
    upDegrees: number,
    downDegrees: number,
    leftDegrees: number,
    rightDegrees: number
};

export function PerspectiveFromFieldOfView (fov: FOV, near: number, far: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const upTan = Math.tan((fov.upDegrees * Math.PI) / 180);
    const downTan = Math.tan((fov.downDegrees * Math.PI) / 180);
    const leftTan = Math.tan((fov.leftDegrees * Math.PI) / 180);
    const rightTan = Math.tan((fov.rightDegrees * Math.PI) / 180);
    const xScale = 2 / (leftTan + rightTan);
    const yScale = 2 / (upTan + downTan);

    return out.set(
        xScale,
        0,
        0,
        0,
        0,
        yScale,
        0,
        0,
        -((leftTan - rightTan) * xScale * 0.5),
        (upTan - downTan) * yScale * 0.5,
        far / (near - far),
        -1,
        0,
        0,
        (far * near) / (near - far),
        0
    );
}
