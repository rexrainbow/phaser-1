import IText from './IText';

export default function SetFixedSize (width: number, height: number, ...text: IText[])
{
    text.forEach(entity => {

        entity.fixedWidth = width;
        entity.fixedHeight = height;
        entity.updateText();

    });
}
