import { IText } from './IText';

export function SetPadding (left: number, right: number, top: number, bottom: number, ...text: IText[])
{
    text.forEach(entity => {

        const padding = entity.padding;

        padding.left = left;
        padding.right = right;
        padding.top = top;
        padding.bottom = bottom;

        entity.updateText();

    });
}
