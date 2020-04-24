import { IParent } from './IParent';

export function CountMatchingChildren (parent: IParent, property: string | symbol, value?: never): number
{
    const children = parent.children;

    let total = 0;

    children.forEach(child =>
    {
        const descriptor = Object.getOwnPropertyDescriptor(child, property);

        if (descriptor && (value === undefined || value === descriptor.value))
        {
            total++;
        }
    });

    return total;
}
