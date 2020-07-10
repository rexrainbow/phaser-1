import { ITriangle } from './ITriangle';
import { Line } from '../line/Line';

export function GetTriangleEdges (triangle: ITriangle): Line[]
{
    const { x1, y1, x2, y2, x3, y3 } = triangle;

    const edge1 = new Line(x1, y1, x2, y2);
    const edge2 = new Line(x2, y2, x3, y3);
    const edge3 = new Line(x3, y3, x1, y1);

    return [ edge1, edge2, edge3 ];
}
