import './RectangleContains.js';
import { Rectangle } from './Rectangle.js';

function CloneRectangle(source) {
    return new Rectangle(source.x, source.y, source.width, source.height);
}

export { CloneRectangle };
