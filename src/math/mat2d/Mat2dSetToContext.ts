import { IMatrix2D } from './IMatrix2D';

// Copy the values from the src Matrix to the given Canvas Rendering Context.
// This will use the Context.setTransform method.

export function Mat2dSetToContext (src: IMatrix2D, context: CanvasRenderingContext2D): CanvasRenderingContext2D
{
    const { a, b, c, d, tx, ty } = src;

    context.setTransform(a, b, c, d, tx, ty);

    return context;
}
