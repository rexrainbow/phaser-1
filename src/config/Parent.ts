import { GetElement } from '../dom/GetElement';

let parent: HTMLElement;

function Parent (parentElement?: string | HTMLElement): () => void
{
    return (): void =>
    {
        //  If this function was called and `null` *wasn't* given as the parent
        //  then we try to figure it out, or fallback to the document body
        if (parentElement)
        {
            parent = GetElement(parentElement);
        }
    };
}

function GetParent (): string | HTMLElement | undefined
{
    return parent;
}

export {
    Parent,
    GetParent
};
