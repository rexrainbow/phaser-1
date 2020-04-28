import { IGameObject } from '../../IGameObject';
import { UpdateWorldTransform } from './UpdateWorldTransform';

export function UpdateLocalTransform (gameObject: IGameObject): void
{
    const transformComponent = gameObject.transform;
    const local = transformComponent.local;

    const { rotation, skewX, skewY, scaleX, scaleY, x, y } = transformComponent;

    local.set(
        Math.cos(rotation + skewY) * scaleX,
        Math.sin(rotation + skewY) * scaleX,
        -Math.sin(rotation - skewX) * scaleY,
        Math.cos(rotation - skewX) * scaleY,
        x,
        y
    );

    UpdateWorldTransform(gameObject);
}
