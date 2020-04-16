import GetElement from './GetElement';

export default function AddToDOM (element: HTMLElement, parent?: string | HTMLElement): HTMLElement
{
    const target: HTMLElement = GetElement(parent);

    target.appendChild(element);

    return element;
}
