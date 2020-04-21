import { IText } from './IText';

export function SetText (value: string | string[], ...text: IText[]): void
{
    text.forEach(entity =>
    {
        entity.setText(value);
    });
}
