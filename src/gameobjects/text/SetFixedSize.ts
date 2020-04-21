import { IText } from './IText';

export function SetFixedSize (width: number, height: number, ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.fixedWidth = width;
        entity.fixedHeight = height;
        entity.updateText();
    });
}
