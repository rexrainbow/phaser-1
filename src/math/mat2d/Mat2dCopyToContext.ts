import { IMatrix2D } from './IMatrix2D';

// Copy the values from src Matrix to the given Canvas Rendering Context.
// This will use the Context.transform method.

export function Mat2dCopyToContext (src: IMatrix2D, context: CanvasRenderingContext2D): CanvasRenderingContext2D
{
    const { a, b, c, d, tx, ty } = src;

    context.transform(a, b, c, d, tx, ty);

    return context;
}
