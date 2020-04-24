import { AddTimer } from '../../time';
import { AngleBetween } from '../../math/angle';
import { DistanceBetween } from '../../math/distance';
import { ITransformGameObject } from './ITransformGameObject';

export function MoveToPosition (x: number, y: number, duration: number, ...child: ITransformGameObject[]): void
{
    child.forEach(entity =>
    {
        const px = entity.x;
        const py = entity.y;

        const azimuth = AngleBetween(px, py, x, y);
        const speed = DistanceBetween(px, py, x, y) / (duration / 1000);

        const incX = Math.cos(azimuth) * speed;
        const incY = Math.sin(azimuth) * speed;

        const moveHandler = (delta: number): void =>
        {
            delta /= 1000;

            entity.x += incX * delta;
            entity.y += incY * delta;
        };

        const world = entity.world;

        if (world)
        {
            AddTimer(world, {
                duration,
                onUpdate: moveHandler
            });
        }
    });
}
