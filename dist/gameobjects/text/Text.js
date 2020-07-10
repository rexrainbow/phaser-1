import { GameInstance } from '../../GameInstance.js';
import '../../utils/NOOP.js';
import '../../math/matrix2d/Matrix2D.js';
import '../../geom/rectangle/RectangleContains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../math/vec2/Vec2.js';
import '../../math/vec2/Vec2Callback.js';
import '../../math/matrix2d/CopyFrom.js';
import '../../config/const.js';
import '../../config/ConfigStore.js';
import '../../renderer/BindingQueue.js';
import '../../config/defaultorigin/GetDefaultOriginX.js';
import '../../config/defaultorigin/GetDefaultOriginY.js';
import '../../renderer/webgl1/renderpass/AddViewport.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/renderpass/BindViewport.js';
import '../../renderer/webgl1/renderpass/SetViewport.js';
import '../../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../../renderer/webgl1/renderpass/PopViewport.js';
import '../../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../../renderer/webgl1/renderpass/AddFramebuffer.js';
import '../../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../../renderer/webgl1/renderpass/Draw.js';
import '../../renderer/webgl1/renderpass/Flush.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import '../../renderer/webgl1/renderpass/GetVertexBufferEntry.js';
import '../../renderer/webgl1/renderpass/SetTexture.js';
import '../../display/DepthFirstSearch.js';
import '../../display/GetChildIndex.js';
import '../../display/RemoveChildAt.js';
import '../../display/RemoveChild.js';
import '../events/AddedToWorldEvent.js';
import '../events/DestroyEvent.js';
import '../events/RemovedFromWorldEvent.js';
import '../../events/Emit.js';
import '../../display/SetWorld.js';
import '../../display/SetParent.js';
import { DIRTY_CONST } from '../DIRTY_CONST.js';
import '../../display/RemoveChildrenBetween.js';
import '../../display/DestroyChildren.js';
import '../../display/ReparentChildren.js';
import '../../textures/CreateCanvas.js';
import '../../textures/TextureManagerInstance.js';
import '../../renderer/webgl1/draw/BatchTexturedQuad.js';
import '../components/transform/GetVertices.js';
import '../components/bounds/BoundsComponent.js';
import '../components/input/InputComponent.js';
import '../components/transform/UpdateLocalTransform.js';
import '../components/transform/UpdateWorldTransform.js';
import '../components/transform/TransformComponent.js';
import '../GameObject.js';
import '../container/Container.js';
import '../../renderer/canvas/draw/DrawTexturedQuad.js';
import '../../renderer/webgl1/colors/PackColors.js';
import '../sprite/SetFrame.js';
import '../sprite/SetTexture.js';
import '../sprite/UpdateVertices.js';
import '../../renderer/webgl1/colors/PackColor.js';
import '../components/Vertex.js';
import { Sprite } from '../sprite/Sprite.js';
import { CanvasTexture } from '../../textures/types/CanvasTexture.js';

class Text extends Sprite {
    constructor(x, y, text = '', font, fillStyle) {
        super(x, y, CanvasTexture());
        this.splitRegExp = /(?:\r\n|\r|\n)/;
        this.padding = { left: 0, right: 0, top: 0, bottom: 0 };
        this.verticalAlign = 'ascent';
        this.lineSpacing = 0;
        this.font = '16px monospace';
        this.fillStyle = '#fff';
        this.strokeStyle = '';
        this.backgroundStyle = '';
        this.cornerRadius = 0;
        this.textAlign = 'left';
        this.textBaseline = 'alphabetic';
        this.lineWidth = 0;
        this.lineDash = [];
        this.antialias = false;
        this.type = 'Text';
        const game = GameInstance.get();
        this.resolution = game.renderer.resolution;
        this.canvas = this.texture.image;
        this.context = this.canvas.getContext('2d');
        if (font) {
            this.font = font;
        }
        if (fillStyle) {
            this.fillStyle = fillStyle;
        }
        this.setText(text);
    }
    syncContext(canvas, ctx) {
        if (this.preRenderCallback) {
            this.preRenderCallback(canvas, ctx);
        }
        ctx.font = this.font;
        ctx.textBaseline = this.textBaseline;
        ctx.textAlign = this.textAlign;
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.setLineDash(this.lineDash);
        ctx.imageSmoothingEnabled = this.antialias;
    }
    updateText() {
        const canvas = this.canvas;
        const ctx = this.context;
        const resolution = this.resolution;
        const lines = this._text.split(this.splitRegExp);
        const padding = this.padding;
        const fillStyle = this.fillStyle;
        const strokeStyle = this.strokeStyle;
        const strokeWidth = this.lineWidth;
        const lineSpacing = this.lineSpacing;
        const strokeWidthHalf = (strokeWidth > 0) ? strokeWidth / 2 : 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.syncContext(canvas, ctx);
        ctx.textAlign = 'start';
        let maxWidth = 0;
        let maxHeight = 0;
        let y = 0;
        const lineMetrics = [];
        const vAlignAscent = (this.verticalAlign === 'ascent');
        const metrics = ctx.measureText('|MÉq');
        const averageLineHeight = Math.ceil(Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent)) + strokeWidth;
        for (let i = 0; i < lines.length; i++) {
            const metrics = ctx.measureText(lines[i]);
            const left = metrics.actualBoundingBoxLeft;
            const right = metrics.actualBoundingBoxRight;
            let ascent = metrics.actualBoundingBoxAscent;
            let descent = metrics.actualBoundingBoxDescent;
            if ((!ascent && !descent) || lines[i] === '') {
                ascent = averageLineHeight;
                descent = 0;
            }
            const lineWidth = Math.ceil(Math.abs(left) + Math.abs(right)) + strokeWidth;
            const lineHeight = Math.ceil(Math.abs(ascent) + Math.abs(descent)) + strokeWidth;
            if (vAlignAscent) {
                y += ascent + strokeWidthHalf;
                if (i > 0) {
                    y += lineSpacing + strokeWidthHalf;
                }
                maxHeight = y + descent + strokeWidthHalf;
            }
            else {
                y = maxHeight + ((lineHeight - descent) - strokeWidthHalf);
                maxHeight += lineHeight;
                if (i < lines.length - 1) {
                    maxHeight += lineSpacing;
                }
            }
            maxWidth = Math.max(maxWidth, lineWidth);
            lineMetrics.push({ lineWidth, lineHeight, ascent, descent, left, right, y });
        }
        maxWidth += padding.left + padding.right;
        maxHeight += padding.top + padding.bottom;
        const displayWidth = (this.fixedWidth) ? this.fixedWidth : maxWidth;
        const displayHeight = (this.fixedHeight) ? this.fixedHeight : maxHeight;
        const canvasWidth = Math.ceil(displayWidth * resolution);
        const canvasHeight = Math.ceil(displayHeight * resolution);
        if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            this.texture.setSize(displayWidth, displayHeight);
            this.setSize(displayWidth, displayHeight);
        }
        ctx.save();
        ctx.scale(resolution, resolution);
        this.syncContext(canvas, ctx);
        const backgroundStyle = this.backgroundStyle;
        if (backgroundStyle) {
            ctx.save();
            ctx.fillStyle = backgroundStyle;
            ctx.strokeStyle = backgroundStyle;
            const cornerRadius = this.cornerRadius;
            const halfRadius = (cornerRadius > 0) ? cornerRadius / 2 : 0;
            if (cornerRadius) {
                ctx.lineWidth = cornerRadius;
                ctx.strokeRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
            }
            ctx.fillRect(halfRadius, halfRadius, displayWidth - cornerRadius, displayHeight - cornerRadius);
            ctx.restore();
        }
        const textAlign = this.textAlign;
        const isCenter = (textAlign === 'center');
        const isRight = (textAlign === 'right' || textAlign === 'end');
        const yOffset = ((displayHeight - maxHeight) / 2) + padding.top;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const metrics = lineMetrics[i];
            let tx = padding.left + metrics.left + strokeWidthHalf;
            const ty = yOffset + metrics.y;
            if (isCenter) {
                tx = displayWidth / 2;
            }
            else if (isRight) {
                tx = displayWidth - strokeWidthHalf;
            }
            if (strokeStyle) {
                ctx.strokeText(line, tx, ty);
            }
            if (fillStyle) {
                ctx.fillText(line, tx, ty);
            }
        }
        ctx.restore();
        if (this.texture.binding) {
            this.texture.binding.update();
        }
        this.setDirty(DIRTY_CONST.TEXTURE);
        return this;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this.setText(value);
    }
    setText(value = '') {
        if (Array.isArray(value)) {
            value = value.join('\n');
        }
        if (value !== this._text) {
            this._text = value.toString();
            this.updateText();
        }
        return this;
    }
    destroy(reparentChildren) {
        this.texture.destroy();
        this.fillStyle = null;
        this.strokeStyle = null;
        this.backgroundStyle = null;
        this.canvas = null;
        this.context = null;
        super.destroy(reparentChildren);
    }
}

export { Text };
