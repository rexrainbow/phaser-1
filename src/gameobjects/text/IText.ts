import IRenderable from '../sprite/IRenderable';

type VerticalTextAlignment = 'ascent' | 'lineheight';

export default interface IText extends IRenderable
{
    preRenderCallback: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => void;
    wordWrapCallback: (text: string) => string;
    splitRegExp: RegExp;
    padding: any;
    verticalAlign: VerticalTextAlignment;
    lineSpacing: number;
    resolution: number;
    cornerRadius: number;
    font: string;
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    backgroundStyle: string | CanvasGradient | CanvasPattern;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    lineWidth: number;
    lineDash: number[];
    fixedWidth: number;
    fixedHeight: number;
    text: string | string[];
    updateText (): this;
    setText (value: string | string[]): this;
}
