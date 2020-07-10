import '../../../GameInstance.js';
import '../../../Linear-8dd9e56a.js';
import '../../../gameobjects/events/UpdateEvent.js';
import '../../../events/EventInstance.js';
import '../../../events/Off.js';
import '../../../events/On.js';
import '../TweenProperty.js';
import { NanoTween } from './NanoTween.js';

function AddTween(target, emitter = null, autoStart = true) {
    return new NanoTween(target, emitter, autoStart);
}

export { AddTween };
