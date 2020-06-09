import { IQuaternion } from './IQuaternion';

export function Equals (a: IQuaternion, b: IQuaternion): boolean
{
    return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
}
