import { IText } from './IText';

export function SetCornerRadius (cornerRadius: number, ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.cornerRadius = cornerRadius;
        entity.updateText();
    });
}
