import GetElement from '../dom/GetElement';

let _parent: HTMLElement = null;

function Parent (parent?: string | HTMLElement)
{
    return () => {

        //  If this function was called and `null` *wasn't* given as the parent
        //  then we try to figure it out, or fallback to the document body
        if (parent)
        {
            _parent = GetElement(parent);
        }

    };
}

function GetParent (): string | HTMLElement | undefined
{
    return _parent;
}

export {
    Parent,
    GetParent
};
