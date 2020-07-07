import './BackgroundColor.js';
import './CanvasContext.js';
import './Size.js';
import '../renderer/BindingQueue.js';
import { CanvasRenderer } from '../renderer/canvas/CanvasRenderer.js';
import { SetRenderer } from './SetRenderer.js';

function SetCanvas() {
    return () => {
        SetRenderer(CanvasRenderer);
    };
}

export { SetCanvas };
