import '../../GameInstance.js';
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
import '../DIRTY_CONST.js';
import '../../display/RemoveChildrenBetween.js';
import '../../display/DestroyChildren.js';
import '../../display/ReparentChildren.js';
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

class AnimatedSprite extends Sprite {
    constructor(x, y, texture, frame) {
        super(x, y, texture, frame);
        this.type = 'AnimatedSprite';
        this.anims = new Map();
        this.animData = {
            currentAnim: '',
            currentFrames: [],
            frameIndex: 0,
            animSpeed: 0,
            nextFrameTime: 0,
            repeatCount: 0,
            isPlaying: false,
            yoyo: false,
            pendingStart: false,
            playingForward: true,
            delay: 0,
            repeatDelay: 0,
            onStart: null,
            onRepeat: null,
            onComplete: null
        };
    }
    stop() {
        const data = this.animData;
        data.isPlaying = false;
        data.currentAnim = '';
        if (data.onComplete) {
            data.onComplete(this, data.currentAnim);
        }
    }
    nextFrame() {
        const data = this.animData;
        data.frameIndex++;
        if (data.frameIndex === data.currentFrames.length) {
            if (data.yoyo) {
                data.frameIndex--;
                data.playingForward = false;
            }
            else if (data.repeatCount === -1 || data.repeatCount > 0) {
                data.frameIndex = 0;
                if (data.repeatCount !== -1) {
                    data.repeatCount--;
                }
                if (data.onRepeat) {
                    data.onRepeat(this, data.currentAnim);
                }
                data.nextFrameTime += data.repeatDelay;
            }
            else {
                data.frameIndex--;
                return this.stop();
            }
        }
        this.setFrame(data.currentFrames[data.frameIndex]);
        data.nextFrameTime += data.animSpeed;
    }
    prevFrame() {
        const data = this.animData;
        data.frameIndex--;
        if (data.frameIndex === -1) {
            if (data.repeatCount === -1 || data.repeatCount > 0) {
                data.frameIndex = 0;
                data.playingForward = true;
                if (data.repeatCount !== -1) {
                    data.repeatCount--;
                }
                if (data.onRepeat) {
                    data.onRepeat(this, data.currentAnim);
                }
                data.nextFrameTime += data.repeatDelay;
            }
            else {
                data.frameIndex = 0;
                return this.stop();
            }
        }
        this.setFrame(data.currentFrames[data.frameIndex]);
        data.nextFrameTime += data.animSpeed;
    }
    update(delta, now) {
        super.update(delta, now);
        const data = this.animData;
        if (!data.isPlaying) {
            return;
        }
        data.nextFrameTime -= delta * 1000;
        data.nextFrameTime = Math.max(data.nextFrameTime, 0);
        if (data.nextFrameTime === 0) {
            if (data.pendingStart) {
                if (data.onStart) {
                    data.onStart(this, data.currentAnim);
                }
                data.pendingStart = false;
                data.nextFrameTime = data.animSpeed;
            }
            else if (data.playingForward) {
                this.nextFrame();
            }
            else {
                this.prevFrame();
            }
        }
    }
    get isPlaying() {
        return this.animData.isPlaying;
    }
    get isPlayingForward() {
        return (this.animData.isPlaying && this.animData.playingForward);
    }
    get currentAnimation() {
        return this.animData.currentAnim;
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        this.anims.clear();
        this.animData = null;
    }
}

export { AnimatedSprite };
