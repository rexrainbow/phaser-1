import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function GetLastChild (parent: IParent, property: string | symbol, value?: never): IGameObject | undefined
{
    const children = parent.children;

    for (let i = children.length - 1; i >= 0; i--)
    {
        const child = children[i];

        const descriptor = Object.getOwnPropertyDescriptor(child, property);

        if (descriptor && (value === undefined || value === descriptor.value))
        {
            return child;
        }
    }
}
