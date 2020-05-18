import { IGameObject } from '../gameobjects/IGameObject';

export function SetValue (property: string | symbol, value: never, ...children: IGameObject[]): IGameObject[]
{
    children.forEach(child =>
    {
        const descriptor = Object.getOwnPropertyDescriptor(child, property);

        if (descriptor)
        {
            descriptor.set(value);
        }
    });

    return children;
}
