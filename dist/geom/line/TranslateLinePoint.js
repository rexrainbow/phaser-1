import { TranslateLine } from './TranslateLine.js';

function TranslateLinePoint(line, v) {
    return TranslateLine(line, v.x, v.y);
}

export { TranslateLinePoint };
