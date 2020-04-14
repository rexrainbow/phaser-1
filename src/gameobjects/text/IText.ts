import ISprite from '../sprite/ISprite';

type VerticalTextAlignment = 'ascent' | 'lineheight';

export default interface IText extends ISprite
{
    preRenderCallback: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => void;
    wordWrapCallback: (text: string) => string;
    splitRegExp: RegExp;
    padding: any;
    verticalAlign: VerticalTextAlignment;
    lineSpacing: number;
    resolution: number;
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
    setText (value: string | string[]): this;
    setFont (font: string): this;
    setFixedSize (width?: number, height?: number): this;
    setFillStyle (style: string | CanvasGradient | CanvasPattern): this;
    setStrokeStyle (style: string | CanvasGradient | CanvasPattern, lineWidth?: number): this;
    setBackgroundStyle (style: string | CanvasGradient | CanvasPattern): this;
    setTextAlign (align: CanvasTextAlign): this;
    setTextBaseline (baseline: CanvasTextBaseline): this;
    setLineWidth (width: number): this;
    setLineSpacing (spacing: number): this;
    setLineDash (segments: number[]): this;
}
