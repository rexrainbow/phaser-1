export default function GetElement (target?: string | HTMLElement): HTMLElement
{
    let element: HTMLElement;

    if (target)
    {
        if (typeof target === 'string')
        {
            //  Hopefully an element ID
            element = document.getElementById(target);
        }
        else if (typeof target === 'object' && target.nodeType === 1)
        {
            //  Quick test for a HTMLElement
            element = target;
        }
    }

    if (!element)
    {
        element = document.body;
    }

    return element;
}
