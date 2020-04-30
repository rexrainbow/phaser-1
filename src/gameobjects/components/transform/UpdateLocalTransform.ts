import { ITransformComponent } from './ITransformComponent';

export function UpdateLocalTransform (transform: ITransformComponent): void
{
    const local = transform.local;

    const { rotation, skewX, skewY, scaleX, scaleY, x, y } = transform;

    local.set(
        Math.cos(rotation + skewY) * scaleX,
        Math.sin(rotation + skewY) * scaleX,
        -Math.sin(rotation - skewX) * scaleY,
        Math.cos(rotation - skewX) * scaleY,
        x,
        y
    );
}
