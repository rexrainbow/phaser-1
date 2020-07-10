import '../const.js';
import '../ConfigStore.js';
import '../backgroundcolor/GetBackgroundColor.js';
import '../size/GetHeight.js';
import '../size/GetResolution.js';
import '../size/GetWidth.js';
import '../../renderer/BindingQueue.js';
import '../canvascontext/GetCanvasContext.js';
import { CanvasRenderer } from '../../renderer/canvas/CanvasRenderer.js';
import { SetRenderer } from '../renderer/SetRenderer.js';

function Canvas() {
    return () => {
        SetRenderer(CanvasRenderer);
    };
}

export { Canvas };
