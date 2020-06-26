import { IVec2Like } from './IVec2Like';
import { CatmullRom as MathCatmullRom } from '../CatmullRom';
import { Vec2 } from './Vec2';

// Gets a new Vector2 for float t on the CatmullRom spline defined by the 4 points

export function CatmullRom (p1: IVec2Like, p2: IVec2Like, p3: IVec2Like, p4: IVec2Like, t: number, out: Vec2 = new Vec2()): Vec2
{
    return out.set(
        MathCatmullRom(t, p1.x, p2.x, p3.x, p4.x),
        MathCatmullRom(t, p1.y, p2.y, p3.y, p4.y)
    );
}
