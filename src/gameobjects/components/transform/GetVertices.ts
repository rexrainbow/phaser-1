import { ITransformComponent } from './ITransformComponent';

export function GetVertices (transform: ITransformComponent): { x0: number; y0: number; x1: number; y1: number; x2: number; y2: number; x3: number; y3: number }
{
    const { a, b, c, d, tx, ty } = transform.world;

    const w1 = transform.left;
    const w0 = transform.right;
    const h1 = transform.top;
    const h0 = transform.bottom;

    const x0 = (w1 * a) + (h1 * c) + tx;
    const y0 = (w1 * b) + (h1 * d) + ty;

    const x1 = (w1 * a) + (h0 * c) + tx;
    const y1 = (w1 * b) + (h0 * d) + ty;

    const x2 = (w0 * a) + (h0 * c) + tx;
    const y2 = (w0 * b) + (h0 * d) + ty;

    const x3 = (w0 * a) + (h1 * c) + tx;
    const y3 = (w0 * b) + (h1 * d) + ty;

    return { x0, y0, x1, y1, x2, y2, x3, y3 };
}
