function canPlayM4A(audioElement = document.createElement('audio')) {
    return ((audioElement.canPlayType('audio/x-m4a') !== '') || (audioElement.canPlayType('audio/aac') !== ''));
}

function canPlayMP3(audioElement = document.createElement('audio')) {
    return (audioElement.canPlayType('audio/mpeg; codecs="mp3"') !== '');
}

function canPlayOGG(audioElement = document.createElement('audio')) {
    return (audioElement.canPlayType('audio/ogg; codecs="vorbis"') !== '');
}

function canPlayOpus(audioElement = document.createElement('audio')) {
    return ((audioElement.canPlayType('audio/ogg; codecs="opus"') !== '') || (audioElement.canPlayType('audio/webm; codecs="opus"') !== ''));
}

function canPlayWAV(audioElement = document.createElement('audio')) {
    return (audioElement.canPlayType('audio/wav; codecs="1"') !== '');
}

function canPlayWebM(audioElement = document.createElement('audio')) {
    return (audioElement.canPlayType('audio/webm; codecs="vorbis"') !== '');
}

function hasAudio() {
    return (window.hasOwnProperty('Audio'));
}

function hasWebAudio() {
    return (window.hasOwnProperty('AudioContext') || window.hasOwnProperty('webkitAudioContext'));
}

function GetAudio() {
    const result = {
        audioData: hasAudio(),
        m4a: false,
        mp3: false,
        ogg: false,
        opus: false,
        wav: false,
        webAudio: hasWebAudio(),
        webm: false
    };
    if (result.audioData) {
        const audioElement = document.createElement('audio');
        // IE9 Running on Windows Server SKU can cause an exception to be thrown
        try {
            const canPlay = !!audioElement.canPlayType;
            if (canPlay) {
                result.m4a = canPlayM4A(audioElement);
                result.mp3 = canPlayMP3(audioElement);
                result.ogg = canPlayOGG(audioElement);
                result.opus = canPlayOpus(audioElement);
                result.wav = canPlayWAV(audioElement);
                result.webm = canPlayWebM(audioElement);
            }
        }
        catch (error) {
            result.audioData = false;
        }
    }
    return result;
}

//  @namespace Phaser.Device.Audio

var Audio = /*#__PURE__*/Object.freeze({
    __proto__: null,
    canPlayM4A: canPlayM4A,
    canPlayMP3: canPlayMP3,
    canPlayOGG: canPlayOGG,
    canPlayOpus: canPlayOpus,
    canPlayWAV: canPlayWAV,
    canPlayWebM: canPlayWebM,
    GetAudio: GetAudio,
    hasAudio: hasAudio,
    hasWebAudio: hasWebAudio
});

function isChrome() {
    const chrome = (/Chrome\/(\d+)/).test(navigator.userAgent);
    const chromeVersion = (chrome) ? parseInt(RegExp.$1, 10) : 0;
    return {
        chrome,
        chromeVersion
    };
}

function isEdge() {
    const edge = (/Edge\/\d+/).test(navigator.userAgent);
    return {
        edge
    };
}

function isFirefox() {
    const firefox = (/Firefox\D+(\d+)/).test(navigator.userAgent);
    const firefoxVersion = (firefox) ? parseInt(RegExp.$1, 10) : 0;
    return {
        firefox,
        firefoxVersion
    };
}

function isiOS() {
    const ua = navigator.userAgent;
    const result = {
        iOS: false,
        iOSVersion: 0,
        iPhone: false,
        iPad: false
    };
    if (/iP[ao]d|iPhone/i.test(ua)) {
        (navigator.appVersion).match(/OS (\d+)/);
        result.iOS = true;
        result.iOSVersion = parseInt(RegExp.$1, 10);
        result.iPhone = (ua.toLowerCase().indexOf('iphone') !== -1);
        result.iPad = (ua.toLowerCase().indexOf('ipad') !== -1);
    }
    return result;
}

function isMobileSafari() {
    const { iOS } = isiOS();
    const mobileSafari = ((/AppleWebKit/).test(navigator.userAgent) && iOS);
    return {
        mobileSafari
    };
}

function isMSIE() {
    const ie = (/MSIE (\d+\.\d+);/).test(navigator.userAgent);
    const ieVersion = (ie) ? parseInt(RegExp.$1, 10) : 0;
    return {
        ie,
        ieVersion
    };
}

function isOpera() {
    const opera = (/Opera/).test(navigator.userAgent);
    return {
        opera
    };
}

function isWindowsPhone() {
    const ua = navigator.userAgent;
    return (/Windows Phone/i.test(ua) || (/IEMobile/i).test(ua));
}

function isSafari() {
    const ua = navigator.userAgent;
    const safari = ((/Safari/).test(ua) && !isWindowsPhone());
    const safariVersion = ((/Version\/(\d+)\./).test(ua)) ? parseInt(RegExp.$1, 10) : 0;
    return {
        safari,
        safariVersion
    };
}

function isSilk() {
    const silk = (/Silk/).test(navigator.userAgent);
    return {
        silk
    };
}

function isTrident() {
    const trident = (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/).test(navigator.userAgent);
    const tridentVersion = (trident) ? parseInt(RegExp.$1, 10) : 0;
    const tridentIEVersion = (trident) ? parseInt(RegExp.$3, 10) : 0;
    return {
        trident,
        tridentVersion,
        tridentIEVersion
    };
}

function GetBrowser() {
    const { chrome, chromeVersion } = isChrome();
    const { edge } = isEdge();
    const { firefox, firefoxVersion } = isFirefox();
    let { ie, ieVersion } = isMSIE();
    const { mobileSafari } = isMobileSafari();
    const { opera } = isOpera();
    const { safari, safariVersion } = isSafari();
    const { silk } = isSilk();
    const { trident, tridentVersion, tridentIEVersion } = isTrident();
    if (trident) {
        ie = true;
        ieVersion = tridentIEVersion;
    }
    const result = {
        chrome,
        chromeVersion,
        edge,
        firefox,
        firefoxVersion,
        ie,
        ieVersion,
        mobileSafari,
        opera,
        safari,
        safariVersion,
        silk,
        trident,
        tridentVersion
    };
    return result;
}

//  @namespace Phaser.Device.Browser

var Browser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GetBrowser: GetBrowser,
    isChrome: isChrome,
    isEdge: isEdge,
    isFirefox: isFirefox,
    isMobileSafari: isMobileSafari,
    isMSIE: isMSIE,
    isOpera: isOpera,
    isSafari: isSafari,
    isSilk: isSilk,
    isTrident: isTrident
});

function isAndroid() {
    return (/Android/.test(navigator.userAgent));
}

function isChromeOS() {
    return (/CrOS/.test(navigator.userAgent));
}

function isCordova() {
    return (window.hasOwnProperty('cordova'));
}

function isCrosswalk() {
    return ((/Crosswalk/).test(navigator.userAgent));
}

function isEjecta() {
    return (window.hasOwnProperty('ejecta'));
}

function isNode() {
    return (typeof process !== 'undefined' && typeof process.versions === 'object' && process.versions.hasOwnProperty('node'));
}

function isElectron() {
    return (isNode() && !!process.versions['electron']);
}

function isKindle() {
    // This will NOT detect early generations of Kindle Fire, I think there is no reliable way...
    // E.g. "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true"
    const ua = navigator.userAgent;
    return ((/Kindle/.test(ua) || (/\bKF[A-Z][A-Z]+/).test(ua) || (/Silk.*Mobile Safari/).test(ua)));
}

function isLinux() {
    return (/Linux/.test(navigator.userAgent));
}

function isMacOS() {
    const ua = navigator.userAgent;
    return (/Mac OS/.test(ua) && !(/like Mac OS/.test(ua)));
}

function isNodeWebkit() {
    return (isNode() && !!process.versions['node-webkit']);
}

function isWebApp() {
    return (navigator.hasOwnProperty('standalone'));
}

function isWindows() {
    return (/Windows/.test(navigator.userAgent));
}

function GetOS() {
    const ua = navigator.userAgent;
    const { iOS, iOSVersion, iPad, iPhone } = isiOS();
    const result = {
        android: isAndroid(),
        chromeOS: isChromeOS(),
        cordova: isCordova(),
        crosswalk: isCrosswalk(),
        desktop: false,
        ejecta: isEjecta(),
        electron: isElectron(),
        iOS,
        iOSVersion,
        iPad,
        iPhone,
        kindle: isKindle(),
        linux: isLinux(),
        macOS: isMacOS(),
        node: isNode(),
        nodeWebkit: isNodeWebkit(),
        pixelRatio: 1,
        webApp: isWebApp(),
        windows: isWindows(),
        windowsPhone: isWindowsPhone()
    };
    if (result.windowsPhone) {
        result.android = false;
        result.iOS = false;
        result.macOS = false;
        result.windows = true;
    }
    const silk = (/Silk/).test(ua);
    if (result.windows || result.macOS || (result.linux && !silk) || result.chromeOS) {
        result.desktop = true;
    }
    //  Windows Phone / Table reset
    if (result.windowsPhone || ((/Windows NT/i.test(ua)) && (/Touch/i.test(ua)))) {
        result.desktop = false;
    }
    return result;
}

//  @namespace Phaser.Device.OS

var OS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GetOS: GetOS,
    isAndroid: isAndroid,
    isChromeOS: isChromeOS,
    isCordova: isCordova,
    isCrosswalk: isCrosswalk,
    isEjecta: isEjecta,
    isElectron: isElectron,
    isiOS: isiOS,
    isKindle: isKindle,
    isLinux: isLinux,
    isMacOS: isMacOS,
    isNode: isNode,
    isNodeWebkit: isNodeWebkit,
    isWebApp: isWebApp,
    isWindows: isWindows,
    isWindowsPhone: isWindowsPhone
});

function canPlayH264Video(videoElement = document.createElement('video')) {
    return (videoElement.canPlayType('video/mp4; codecs="avc1.42E01E"') !== '');
}

function canPlayHLSVideo(videoElement = document.createElement('video')) {
    return (videoElement.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"') !== '');
}

function canPlayOGGVideo(videoElement = document.createElement('video')) {
    return (videoElement.canPlayType('video/ogg; codecs="theora"') !== '');
}

function canPlayVP9Video(videoElement = document.createElement('video')) {
    return (videoElement.canPlayType('video/webm; codecs="vp9"') !== '');
}

function canPlayWebMVideo(videoElement = document.createElement('video')) {
    return (videoElement.canPlayType('video/webm; codecs="vp8, vorbis"') !== '');
}

function GetVideo() {
    const result = {
        h264Video: false,
        hlsVideo: false,
        mp4Video: false,
        oggVideo: false,
        vp9Video: false,
        webmVideo: false
    };
    const videoElement = document.createElement('video');
    // IE9 Running on Windows Server SKU can cause an exception to be thrown
    try {
        const canPlay = !!videoElement.canPlayType;
        if (canPlay) {
            result.h264Video = canPlayH264Video(videoElement);
            result.hlsVideo = canPlayHLSVideo(videoElement);
            result.oggVideo = canPlayOGGVideo(videoElement);
            result.vp9Video = canPlayVP9Video(videoElement);
            result.webmVideo = canPlayWebMVideo(videoElement);
        }
    }
    catch (error) {
        //  Nothing to do here
    }
    //  Duplicate the result for Phaser 3 compatibility
    result.mp4Video = result.hlsVideo;
    return result;
}

//  @namespace Phaser.Device.Video

var Video = /*#__PURE__*/Object.freeze({
    __proto__: null,
    canPlayH264Video: canPlayH264Video,
    canPlayHLSVideo: canPlayHLSVideo,
    canPlayOGGVideo: canPlayOGGVideo,
    canPlayVP9Video: canPlayVP9Video,
    canPlayWebMVideo: canPlayWebMVideo,
    GetVideo: GetVideo
});

//  @namespace Phaser.Device
var index = {
    Audio,
    Browser,
    OS,
    Video
};

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index,
    canPlayM4A: canPlayM4A,
    canPlayMP3: canPlayMP3,
    canPlayOGG: canPlayOGG,
    canPlayOpus: canPlayOpus,
    canPlayWAV: canPlayWAV,
    canPlayWebM: canPlayWebM,
    GetAudio: GetAudio,
    hasAudio: hasAudio,
    hasWebAudio: hasWebAudio,
    GetBrowser: GetBrowser,
    isChrome: isChrome,
    isEdge: isEdge,
    isFirefox: isFirefox,
    isMobileSafari: isMobileSafari,
    isMSIE: isMSIE,
    isOpera: isOpera,
    isSafari: isSafari,
    isSilk: isSilk,
    isTrident: isTrident,
    GetOS: GetOS,
    isAndroid: isAndroid,
    isChromeOS: isChromeOS,
    isCordova: isCordova,
    isCrosswalk: isCrosswalk,
    isEjecta: isEjecta,
    isElectron: isElectron,
    isiOS: isiOS,
    isKindle: isKindle,
    isLinux: isLinux,
    isMacOS: isMacOS,
    isNode: isNode,
    isNodeWebkit: isNodeWebkit,
    isWebApp: isWebApp,
    isWindows: isWindows,
    isWindowsPhone: isWindowsPhone,
    canPlayH264Video: canPlayH264Video,
    canPlayHLSVideo: canPlayHLSVideo,
    canPlayOGGVideo: canPlayOGGVideo,
    canPlayVP9Video: canPlayVP9Video,
    canPlayWebMVideo: canPlayWebMVideo,
    GetVideo: GetVideo
});

function AddToDOM(element, parent) {
    let target;
    if (parent) {
        if (typeof parent === 'string') {
            //  Hopefully an element ID
            target = document.getElementById(parent);
        }
        else if (typeof parent === 'object' && parent.nodeType === 1) {
            //  Quick test for a HTMLElement
            target = parent;
        }
    }
    else if (element.parentElement) {
        return element;
    }
    //  Fallback, covers an invalid ID and a non HTMLElement object
    if (!target) {
        target = document.body;
    }
    target.appendChild(element);
    return element;
}

function DOMContentLoaded(callback) {
    const readyState = document.readyState;
    if (readyState === 'complete' || readyState === 'interactive') {
        callback();
        return;
    }
    const check = () => {
        document.removeEventListener('deviceready', check, true);
        document.removeEventListener('DOMContentLoaded', check, true);
        window.removeEventListener('load', check, true);
        callback();
    };
    if (!document.body) {
        window.setTimeout(check, 20);
    }
    else if (window.hasOwnProperty('cordova')) {
        document.addEventListener('deviceready', check, true);
    }
    else {
        document.addEventListener('DOMContentLoaded', check, true);
        window.addEventListener('load', check, true);
    }
}

function RemoveFromDOM(element) {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

//  @namespace Phaser.DOM

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AddToDOM: AddToDOM,
    DOMContentLoaded: DOMContentLoaded,
    RemoveFromDOM: RemoveFromDOM
});

class Rectangle {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.set(x, y, width, height);
    }
    set(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        return this;
    }
    set right(value) {
        if (value <= this.x) {
            this.width = 0;
        }
        else {
            this.width = value - this.x;
        }
    }
    get right() {
        return this.x + this.width;
    }
    set bottom(value) {
        if (value <= this.y) {
            this.height = 0;
        }
        else {
            this.height = value - this.y;
        }
    }
    get bottom() {
        return this.y + this.height;
    }
    contains(px, py) {
        const { x, y, width, height } = this;
        if (width <= 0 || height <= 0) {
            return false;
        }
        return (x <= px && x + width >= px && y <= py && y + height >= py);
    }
}

//  The Base Game Object which all Scene entites extend
class GameObject {
    constructor() {
        this.name = '';
        this.type = 'GameObject';
        this.willRender = true;
        this.willUpdate = true;
        this.dirtyRender = true;
        this.dirtyUpdate = true;
        this.dirtyFrame = 0;
        this.isParent = false;
        this.visible = true;
        this.inputEnabled = false;
        this.inputEnabledChildren = true;
        this.fixBounds = false;
        this.bounds = new Rectangle();
    }
    isRenderable() {
        return (this.visible && this.willRender);
    }
    setDirtyRender(setFrame = true) {
        this.dirtyRender = true;
        const scene = this.scene;
        if (setFrame && scene) {
            this.dirtyFrame = scene.game.frame;
        }
        return this;
    }
    setDirtyUpdate() {
        this.dirtyUpdate = true;
        return this;
    }
    getBounds(includeChildren = false) {
        return this.bounds;
    }
    setBounds(x, y, width, height) {
        this.bounds.set(x, y, width, height);
        return this;
    }
    update() {
    }
    updateTransform() {
        return this;
    }
    render() {
    }
    destroy(reparentChildren) {
        this.scene = null;
    }
}

var CONST = {
    POSITION_X: 0,
    POSITION_Y: 1,
    ORIGIN_X: 2,
    ORIGIN_Y: 3,
    SKEW_X: 4,
    SKEW_Y: 5,
    SCALE_X: 6,
    SCALE_Y: 7,
    ROTATION: 8,
    ANGLE: 9
};

//  A Matrix2D contains six elements in a short-form of the 3x3 Matrix, with the last column ignored.
//  |----|----|----|
//  | a  | b  | 0  |
//  |----|----|----|
//  | c  | d  | 0  |
//  |----|----|----|
//  | tx | ty | 1  |
//  |----|----|----|
class Matrix2D {
    /**
     * Creates an instance of Matrix2D.
     *
     * @param {number} [a=1] - X scale.
     * @param {number} [b=0] - X skew.
     * @param {number} [c=0] - Y skew.
     * @param {number} [d=1] - Y scale.
     * @param {number} [tx=0] - X translation
     * @param {number} [ty=0] - Y translation
     * @memberof Matrix2D
     */
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.set(a, b, c, d, tx, ty);
    }
    set(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    }
    identity() {
        return this.set();
    }
    toArray() {
        return [this.a, this.b, this.c, this.d, this.tx, this.ty];
    }
    fromArray(src) {
        return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
    }
    [Symbol.iterator]() {
        const data = this.toArray();
        return data[Symbol.iterator]();
    }
}

//  Copy the values from the src Matrix to the target Matrix and return the target Matrix.
function Copy(src, target) {
    return target.set(src.a, src.b, src.c, src.d, src.tx, src.ty);
}

class TransformGameObject extends GameObject {
    constructor(x = 0, y = 0) {
        super();
        const byte = Float32Array.BYTES_PER_ELEMENT;
        const buffer = new ArrayBuffer(10 * byte);
        this.transformBuffer = buffer;
        /**
         * transformData:
         * 0 = position x
         * 1 = position y
         * 2 = origin x
         * 3 = origin y
         * 4 = skew x
         * 5 = skew y
         * 6 = scale x
         * 7 = scale y
         * 8 = rotation
         * 9 = angle
         */
        this.transformData = new Float32Array(buffer, 0, 10);
        this.localTransform = new Matrix2D();
        this.worldTransform = new Matrix2D();
        this.transformData.set([x, y, 0.5, 0.5, 0, 0, 1, 1, 0, 0]);
        this.width = 0;
        this.height = 0;
        this.updateCache();
    }
    updateCache() {
        const transform = this.localTransform;
        const { rotation, skewX, skewY, scaleX, scaleY, x, y } = this;
        transform.set(Math.cos(rotation + skewY) * scaleX, Math.sin(rotation + skewY) * scaleX, -Math.sin(rotation - skewX) * scaleY, Math.cos(rotation - skewX) * scaleY, x, y);
        return this.updateTransform();
    }
    updateTransform() {
        this.setDirtyRender();
        const parent = this.parent;
        const lt = this.localTransform;
        const wt = this.worldTransform;
        lt.tx = this.x;
        lt.ty = this.y;
        if (!parent) {
            Copy(lt, wt);
            return this;
        }
        const { a, b, c, d, tx, ty } = lt;
        const { a: pa, b: pb, c: pc, d: pd, tx: ptx, ty: pty } = parent.worldTransform;
        wt.set(a * pa + b * pc, a * pb + b * pd, c * pa + d * pc, c * pb + d * pd, tx * pa + ty * pc + ptx, tx * pb + ty * pd + pty);
        return this;
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        return this;
    }
    setOrigin(originX, originY = originX) {
        const data = this.transformData;
        data[CONST.ORIGIN_X] = originX;
        data[CONST.ORIGIN_Y] = originY;
        return this;
    }
    setPosition(x, y = x) {
        const data = this.transformData;
        data[CONST.POSITION_X] = x;
        data[CONST.POSITION_Y] = y;
        return this.updateTransform();
    }
    setRotation(rotation) {
        const data = this.transformData;
        if (rotation !== data[CONST.ROTATION]) {
            data[CONST.ROTATION] = rotation;
            this.updateCache();
        }
        return this;
    }
    setScale(scaleX, scaleY = scaleX) {
        const data = this.transformData;
        data[CONST.SCALE_X] = scaleX;
        data[CONST.SCALE_Y] = scaleY;
        return this.updateCache();
    }
    setSkew(skewX, skewY = skewX) {
        const data = this.transformData;
        data[CONST.SKEW_X] = skewX;
        data[CONST.SKEW_Y] = skewY;
        return this.updateCache();
    }
    destroy() {
        super.destroy();
        this.localTransform = null;
        this.worldTransform = null;
        this.transformBuffer = null;
        this.transformData = null;
    }
    set x(value) {
        this.transformData[CONST.POSITION_X] = value;
        this.updateTransform();
    }
    get x() {
        return this.transformData[CONST.POSITION_X];
    }
    set y(value) {
        this.transformData[CONST.POSITION_Y] = value;
        this.updateTransform();
    }
    get y() {
        return this.transformData[CONST.POSITION_Y];
    }
    get originX() {
        return this.transformData[CONST.ORIGIN_X];
    }
    set originX(value) {
        this.transformData[CONST.ORIGIN_X] = value;
    }
    get originY() {
        return this.transformData[CONST.ORIGIN_Y];
    }
    set originY(value) {
        this.transformData[CONST.ORIGIN_Y] = value;
    }
    set skewX(value) {
        const data = this.transformData;
        if (value !== data[CONST.SKEW_X]) {
            data[CONST.SKEW_X] = value;
            this.updateCache();
        }
    }
    get skewX() {
        return this.transformData[CONST.SKEW_X];
    }
    set skewY(value) {
        const data = this.transformData;
        if (value !== data[CONST.SKEW_Y]) {
            data[CONST.SKEW_Y] = value;
            this.updateCache();
        }
    }
    get skewY() {
        return this.transformData[CONST.SKEW_Y];
    }
    set scaleX(value) {
        const data = this.transformData;
        if (value !== data[CONST.SCALE_X]) {
            data[CONST.SCALE_X] = value;
            this.updateCache();
        }
    }
    get scaleX() {
        return this.transformData[CONST.SCALE_X];
    }
    set scaleY(value) {
        const data = this.transformData;
        if (value !== data[CONST.SCALE_Y]) {
            data[CONST.SCALE_Y] = value;
            this.updateCache();
        }
    }
    get scaleY() {
        return this.transformData[CONST.SCALE_Y];
    }
    set rotation(value) {
        const data = this.transformData;
        if (value !== data[CONST.ROTATION]) {
            data[CONST.ROTATION] = value;
            this.updateCache();
        }
    }
    get rotation() {
        return this.transformData[CONST.ROTATION];
    }
}

class Container extends TransformGameObject {
    constructor(x = 0, y = 0) {
        super(x, y);
        this._alpha = 1;
        this.children = [];
        this.isParent = true;
        this.type = 'Container';
    }
    update(delta, time) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child && child.willUpdate) {
                child.update(delta, time);
            }
        }
    }
    destroy(reparentChildren) {
        // if (reparentChildren)
        // {
        //     this.reparentChildren(reparentChildren);
        // }
        // else
        // {
        //     this.destroyChildren();
        // }
        this.children = null;
        super.destroy();
    }
    get numChildren() {
        return this.children.length;
    }
    get alpha() {
        return this._alpha;
    }
    set alpha(value) {
        if (value !== this._alpha) {
            this._alpha = value;
            this.setDirtyRender();
        }
    }
}

class Frame {
    constructor(texture, key, x, y, width, height) {
        this.trimmed = false;
        this.texture = texture;
        this.key = key;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sourceSizeWidth = width;
        this.sourceSizeHeight = height;
        this.updateUVs();
    }
    setPivot(x, y) {
        this.pivot = { x, y };
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.sourceSizeWidth = width;
        this.sourceSizeHeight = height;
        this.updateUVs();
    }
    setSourceSize(width, height) {
        this.sourceSizeWidth = width;
        this.sourceSizeHeight = height;
    }
    setTrim(width, height, x, y, w, h) {
        this.trimmed = true;
        this.sourceSizeWidth = width;
        this.sourceSizeHeight = height;
        this.spriteSourceSizeX = x;
        this.spriteSourceSizeY = y;
        this.spriteSourceSizeWidth = w;
        this.spriteSourceSizeHeight = h;
    }
    updateUVs() {
        const { x, y, width, height } = this;
        const baseTextureWidth = this.texture.width;
        const baseTextureHeight = this.texture.height;
        this.u0 = x / baseTextureWidth;
        this.v0 = y / baseTextureHeight;
        this.u1 = (x + width) / baseTextureWidth;
        this.v1 = (y + height) / baseTextureHeight;
    }
}

let gl;
function get() {
    return gl;
}
function set(context) {
    gl = context;
}
var GL = {
    get,
    set
};

function SetGLTextureFilterMode(texture, linear = true) {
    const gl = GL.get();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    const mode = (linear) ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mode);
}

function DeleteGLTexture(texture) {
    const gl = GL.get();
    if (gl.isTexture(texture)) {
        gl.deleteTexture(texture);
    }
}

function DeleteFramebuffer(framebuffer) {
    const gl = GL.get();
    if (gl.isFramebuffer(framebuffer)) {
        gl.deleteFramebuffer(framebuffer);
    }
}

function IsPowerOfTwo(width, height) {
    if (width < 1 || height < 1) {
        return false;
    }
    return ((width & (width - 1)) === 0) && ((height & (height - 1)) === 0);
}

function CreateGLTexture(source, width, height, potClamp = true, linear = true) {
    const gl = GL.get();
    const glTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    if (source) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        width = source.width;
        height = source.height;
    }
    else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    }
    const mode = (linear) ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mode);
    const pot = (source && IsPowerOfTwo(width, height));
    const wrap = (pot && potClamp) ? gl.REPEAT : gl.CLAMP_TO_EDGE;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    if (pot) {
        gl.generateMipmap(gl.TEXTURE_2D);
    }
    return glTexture;
}

function UpdateGLTexture(source, dstTexture, flipY = false) {
    const gl = GL.get();
    const width = source.width;
    const height = source.height;
    if (width > 0 && height > 0) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, dstTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    }
}

class Texture {
    constructor(image, width, height) {
        //  Unique identifier of this Texture, if stored in the Texture Manager
        this.key = '';
        this.glIndex = 0;
        this.glIndexCounter = -1;
        if (image) {
            width = image.width;
            height = image.height;
        }
        this.image = image;
        this.width = width;
        this.height = height;
        this.frames = new Map();
        this.data = {};
        this.add('__BASE', 0, 0, width, height);
    }
    add(key, x, y, width, height) {
        if (this.frames.has(key)) {
            return null;
        }
        let frame = new Frame(this, key, x, y, width, height);
        this.frames.set(key, frame);
        if (!this.firstFrame || this.firstFrame.key === '__BASE') {
            this.firstFrame = frame;
        }
        return frame;
    }
    get(key) {
        //  null, undefined, empty string, zero
        if (!key) {
            return this.firstFrame;
        }
        if (key instanceof Frame) {
            key = key.key;
        }
        let frame = this.frames.get(key);
        if (!frame) {
            console.warn('Texture.frame missing: ' + key);
            frame = this.firstFrame;
        }
        return frame;
    }
    getFrames(frames) {
        const output = [];
        frames.forEach((key) => {
            output.push(this.get(key));
        });
        return output;
    }
    getFramesInRange(prefix, start, end, zeroPad = 0, suffix = '') {
        const frameKeys = [];
        const diff = (start < end) ? 1 : -1;
        //  Adjust because we use i !== end in the for loop
        end += diff;
        for (let i = start; i !== end; i += diff) {
            frameKeys.push(prefix + i.toString().padStart(zeroPad, '0') + suffix);
        }
        return this.getFrames(frameKeys);
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        const frame = this.frames.get('__BASE');
        frame.setSize(width, height);
    }
    setFilter(linear) {
        SetGLTextureFilterMode(this.glTexture, linear);
    }
    createGL() {
        if (this.glTexture) {
            DeleteGLTexture(this.glTexture);
        }
        this.glTexture = CreateGLTexture(this.image);
    }
    updateGL() {
        if (!this.glTexture) {
            this.glTexture = CreateGLTexture(this.image);
        }
        else {
            UpdateGLTexture(this.image, this.glTexture);
        }
    }
    destroy() {
        this.frames.clear();
        this.image = null;
        this.firstFrame = null;
        this.data = null;
        DeleteGLTexture(this.glTexture);
        DeleteFramebuffer(this.glFramebuffer);
    }
}

let gameInstance;
function get$1() {
    return gameInstance;
}
function set$1(game) {
    gameInstance = game;
}
var GameInstance = {
    get: get$1,
    set: set$1
};

function SetFrame(key, ...sprite) {
    sprite.forEach(entity => {
        let frame = entity.texture.get(key);
        if (frame === entity.frame) {
            return;
        }
        entity.frame = frame;
        entity.setSize(frame.sourceSizeWidth, frame.sourceSizeHeight);
        entity.setBounds(entity.x, entity.y, entity.width, entity.height);
        if (frame.pivot) {
            entity.setOrigin(frame.pivot.x, frame.pivot.y);
        }
        let data = entity.vertexData;
        //  This rarely changes, so we'll set it here, rather than every game step:
        data[2] = frame.u0;
        data[3] = frame.v0;
        data[8] = frame.u0;
        data[9] = frame.v1;
        data[14] = frame.u1;
        data[15] = frame.v1;
        data[20] = frame.u1;
        data[21] = frame.v0;
        entity.setDirtyRender();
        entity.hasTexture = true;
    });
}

function SetTexture(key, frame, ...sprite) {
    sprite.forEach(entity => {
        if (!key) {
            return;
        }
        if (key instanceof Texture) {
            entity.texture = key;
        }
        else {
            entity.texture = GameInstance.get().textures.get(key);
        }
        if (!entity.texture) {
            console.warn('Invalid Texture key: ' + key);
        }
        else {
            SetFrame(frame, entity);
        }
    });
}

class Sprite extends Container {
    constructor(x, y, texture, frame) {
        super(x, y);
        this.hasTexture = false;
        this._tint = 0xffffff;
        this._prevTextureID = -1;
        this.vertexData = new Float32Array(24).fill(0);
        this.vertexColor = new Uint32Array(4).fill(4294967295);
        this.vertexAlpha = new Float32Array(4).fill(1);
        this.vertexTint = new Uint32Array(4).fill(0xffffff);
        this.type = 'Sprite';
        this.setTexture(texture, frame);
        this.setBounds(x, y, this.width, this.height);
    }
    getBounds(includeChildren = false) {
        if (this.dirtyRender) {
            this.updateVertices();
        }
        super.getBounds(includeChildren);
        return this.bounds;
    }
    setTexture(key, frame) {
        SetTexture(key, frame, this);
        return this;
    }
    setFrame(key) {
        SetFrame(key, this);
        return this;
    }
    isRenderable() {
        return (this.visible && this.willRender && this.hasTexture && this.alpha > 0);
    }
    updateVertices() {
        const data = this.vertexData;
        this.dirtyRender = false;
        const frame = this.frame;
        const originX = this.originX;
        const originY = this.originY;
        let w0;
        let w1;
        let h0;
        let h1;
        const [a, b, c, d, tx, ty] = this.worldTransform;
        if (frame.trimmed) {
            w1 = frame.spriteSourceSizeX - (originX * frame.sourceSizeWidth);
            w0 = w1 + frame.spriteSourceSizeWidth;
            h1 = frame.spriteSourceSizeY - (originY * frame.sourceSizeHeight);
            h0 = h1 + frame.spriteSourceSizeHeight;
        }
        else {
            w1 = -originX * frame.sourceSizeWidth;
            w0 = w1 + frame.sourceSizeWidth;
            h1 = -originY * frame.sourceSizeHeight;
            h0 = h1 + frame.sourceSizeHeight;
        }
        const x0 = (w1 * a) + (h1 * c) + tx;
        const y0 = (w1 * b) + (h1 * d) + ty;
        const x1 = (w1 * a) + (h0 * c) + tx;
        const y1 = (w1 * b) + (h0 * d) + ty;
        const x2 = (w0 * a) + (h0 * c) + tx;
        const y2 = (w0 * b) + (h0 * d) + ty;
        const x3 = (w0 * a) + (h1 * c) + tx;
        const y3 = (w0 * b) + (h1 * d) + ty;
        //  top left
        data[0] = x0;
        data[1] = y0;
        //  bottom left
        data[6] = x1;
        data[7] = y1;
        //  bottom right
        data[12] = x2;
        data[13] = y2;
        //  top right
        data[18] = x3;
        data[19] = y3;
        const bounds = this.bounds;
        bounds.x = Math.min(x0, x1, x2, x3);
        bounds.y = Math.min(y0, y1, y2, y3);
        bounds.right = Math.max(x0, x1, x2, x3);
        bounds.bottom = Math.max(y0, y1, y2, y3);
    }
    uploadBuffers(F32, U32, offset, setTexture = true) {
        //  Skip all of this if not dirty
        if (this.dirtyRender) {
            this.updateVertices();
        }
        const data = this.vertexData;
        const textureIndex = this.texture.glIndex;
        //  Do we have a different texture ID?
        if (setTexture && textureIndex !== this._prevTextureID) {
            this._prevTextureID = textureIndex;
            data[4] = textureIndex;
            data[10] = textureIndex;
            data[16] = textureIndex;
            data[22] = textureIndex;
        }
        //  Copy the data to the array buffer
        F32.set(data, offset);
        const color = this.vertexColor;
        //  Copy the vertex colors to the Uint32 view (as the data copy above overwrites them)
        U32[offset + 5] = color[0];
        U32[offset + 11] = color[2];
        U32[offset + 17] = color[3];
        U32[offset + 23] = color[1];
    }
    destroy(reparentChildren) {
        super.destroy(reparentChildren);
        this.texture = null;
        this.frame = null;
        this.hasTexture = false;
        this.vertexData = null;
        this.vertexColor = null;
        this.vertexAlpha = null;
        this.vertexTint = null;
    }
    get tint() {
        return this._tint;
    }
    set tint(value) {
        this._tint = value;
        // this.setTint(value);
    }
}
/*
    vertexData array structure:

    0 = topLeft.x
    1 = topLeft.y
    2 = frame.u0
    3 = frame.v0
    4 = textureIndex
    5 = topLeft.packedColor

    6 = bottomLeft.x
    7 = bottomLeft.y
    8 = frame.u0
    9 = frame.v1
    10 = textureIndex
    11 = bottomLeft.packedColor

    12 = bottomRight.x
    13 = bottomRight.y
    14 = frame.u1
    15 = frame.v1
    16 = textureIndex
    17 = bottomRight.packedColor

    18 = topRight.x
    19 = topRight.y
    20 = frame.u1
    21 = frame.v0
    22 = textureIndex
    23 = topRight.packedColor
*/

// import AnimatedSprite from './animatedsprite/AnimatedSprite';
// import SpriteBuffer from './spritebuffer/SpriteBuffer';
// import Text from './text/Text';
var index$3 = {
    Container,
    GameObject,
    Sprite
};

var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$3
});

function Between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function FloatBetween(min, max) {
    return Math.random() * (max - min) + min;
}

//  Adds the src Matrix to the target Matrix and returns the target.
function Add(target, src) {
    target.a += src.a;
    target.b += src.b;
    target.c += src.c;
    target.d += src.d;
    target.tx += src.tx;
    target.ty += src.ty;
    return target;
}

// Copy the values from src Matrix to the given Canvas Rendering Context.
// This will use the Context.transform method.
function CopyToContext(src, context) {
    const { a, b, c, d, tx, ty } = src;
    context.transform(a, b, c, d, tx, ty);
    return context;
}

//  Return the determinant for the src Matrix.
function Determinant(src) {
    const { a, b, c, d } = src;
    return (a * d) - (b * c);
}

function Frobenius(src) {
    return (Math.hypot(src.a, src.b, src.c, src.d, src.tx, src.ty, 1));
}

class Vec2 {
    /**
     * Creates an instance of a Vector2.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @memberof Vec2
     */
    constructor(x = 0, y = 0) {
        this.set(x, y);
    }
    /**
     * Sets the components of this Vector2.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @returns {Vec2}
     * @memberof Vec2
     */
    set(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Sets all components of this Vector2 to zero.
     *
     * @returns {Vec2}
     * @memberof Vec2
     */
    zero() {
        return this.set();
    }
    /**
     * Returns a new array containg the Vector2 component values.
     *
     * @returns {number[]}
     * @memberof Vec2
     */
    getArray() {
        return [this.x, this.y];
    }
    /**
     * Sets the values of this Vector2 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 2 elements, starting from index 0 through to index 1.
     *
     * @param {number[]} src - The source array to copy the values from.
     * @returns {Vec2}
     * @memberof Vec2
     */
    fromArray(src) {
        return this.set(src[0], src[1]);
    }
    [Symbol.iterator]() {
        const data = this.getArray();
        return data[Symbol.iterator]();
    }
}

function GlobalToLocal(mat, x, y, outPoint = new Vec2()) {
    const { a, b, c, d, tx, ty } = mat;
    const id = 1 / ((a * d) + (c * -b));
    outPoint.x = (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id);
    outPoint.y = (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id);
    return outPoint;
}

//  Inverts the target Matrix and then returns it
function Invert(target) {
    const { a, b, c, d, tx, ty } = target;
    let determinant = a * d - b * c;
    if (determinant) {
        determinant = 1 / determinant;
        target.set(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
    }
    return target;
}

//  Apply the identity, translate, rotate and scale operations on the target Matrix then returns it.
function ITRS(target, x, y, angle, scaleX, scaleY) {
    if (angle === 0) {
        return target.set(1, 0, 0, 1, x, y);
    }
    else {
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        return target.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
}

//  Apply the identity, translate, rotate, scale and skew operations on the target Matrix then returns it.
function ITRSS(target, x, y, angle = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
    if (angle === 0) {
        return target.set(1, 0, 0, 1, x, y);
    }
    else {
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        return target.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
}

function LocalToGlobal(mat, x, y, outPoint = new Vec2()) {
    const { a, b, c, d, tx, ty } = mat;
    outPoint.x = (a * x) + (c * y) + tx;
    outPoint.y = (b * x) + (d * y) + ty;
    return outPoint;
}

//  Multiplies the target Matrix by the src Matrix and returns the target.
function Multiply(target, src) {
    const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = target;
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = src;
    target.a = a0 * a1 + c0 * b1;
    target.b = b0 * a1 + d0 * b1;
    target.c = a0 * c1 + c0 * d1;
    target.d = b0 * c1 + d0 * d1;
    target.tx = a0 * tx1 + c0 * ty1 + tx0;
    target.ty = b0 * tx1 + d0 * ty1 + ty0;
    return target;
}

//  Multiplies the target Matrix by the given amount, then returns the target Matrix.
function MultiplyScalar(target, scale) {
    target.a *= scale;
    target.b *= scale;
    target.c *= scale;
    target.d *= scale;
    target.tx *= scale;
    target.ty *= scale;
    return target;
}

//  Multiplies the target Matrix by the given amount, then returns the target Matrix.
function MultiplyScalarAndAdd(target, src, scale) {
    const { a, b, c, d, tx, ty } = src;
    target.a += (a * scale);
    target.b += (b * scale);
    target.c += (c * scale);
    target.d += (d * scale);
    target.tx += (tx * scale);
    target.ty += (ty * scale);
    return target;
}

//  Rotates the target Matrix by the angle (in radians), then returns the target Matrix.
function Rotate(target, angle) {
    const { a, b, c, d, tx, ty } = target;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    return target.set((a * cos) + (c * sin), (b * cos) + (d * sin), (a * -sin) + (c * cos), (b * -sin) + (d * cos), tx, ty);
}

//  Scales the target Matrix by the given amounts, then returns the target Matrix.
function Scale(target, scaleX, scaleY) {
    target.a *= scaleX;
    target.b *= scaleX;
    target.c *= scaleY;
    target.d *= scaleY;
    return target;
}

// Copy the values from the src Matrix to the given Canvas Rendering Context.
// This will use the Context.setTransform method.
function SetToContext(src, context) {
    const { a, b, c, d, tx, ty } = src;
    context.setTransform(a, b, c, d, tx, ty);
    return context;
}

//  Skews the target Matrix by the given angles (in radians), then returns the target Matrix
function Skew(target, angleX, angleY) {
    target.b += Math.tan(angleX);
    target.c += Math.tan(angleY);
    return target;
}

//  Subtracts the src Matrix from the target Matrix and returns the target.
function Subtract(target, src) {
    const { a, b, c, d, tx, ty } = src;
    target.a -= a;
    target.b -= b;
    target.c -= c;
    target.d -= d;
    target.tx -= tx;
    target.ty -= ty;
    return target;
}

//  Translates the target Matrix and returns the target
function Translate(target, x, y) {
    const { a, b, c, d, tx, ty } = target;
    target.tx = (a * x) + (c * y) + tx;
    target.ty = (b * x) + (d * y) + ty;
    return target;
}

//  Zeroes the target Matrix and returns the target
function Zero(target) {
    return target.set(0, 0, 0, 0, 0, 0);
}

//  Phaser.Math.Matrix2d
var index$5 = {
    Add,
    Copy,
    CopyToContext,
    Determinant,
    Frobenius,
    GlobalToLocal,
    Invert,
    ITRS,
    ITRSS,
    LocalToGlobal,
    Matrix2D,
    Multiply,
    MultiplyScalar,
    MultiplyScalarAndAdd,
    Rotate,
    Scale,
    SetToContext,
    Skew,
    Subtract,
    Translate,
    Zero
};

var Matrix2d = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$5
});

//  Adds a to b and returns the values in a new Matrix2D
function Add$1(a, b) {
    return new Matrix2D(a.a + b.a, a.b + b.b, a.c + b.c, a.c + b.c, a.tx + b.tx, a.ty + b.ty);
}

function Append(mat1, mat2, out = new Matrix2D()) {
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = mat1;
    const { a: a2, b: b2, c: c2, d: d2, tx: tx2, ty: ty2 } = mat2;
    return out.set((a2 * a1) + (b2 * c1), (a2 * b1) + (b2 * d1), (c2 * a1) + (d2 * c1), (c2 * b1) + (d2 * d1), (tx2 * a1) + (ty2 * c1) + tx1, (tx2 * b1) + (ty2 * d1) + ty1);
}

//  Clones the src matrix to a new Matrix2D.
function Clone(src) {
    return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
}

//  Compares the a and b matrix and returns if they are equal, based on the epsilon.
function Equals(a, b, epsilon = 0.000001) {
    const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = a;
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = b;
    return (Math.abs(a0 - a1) <= epsilon * Math.max(1, Math.abs(a0), Math.abs(a1)) &&
        Math.abs(b0 - b1) <= epsilon * Math.max(1, Math.abs(b0), Math.abs(b1)) &&
        Math.abs(c0 - c1) <= epsilon * Math.max(1, Math.abs(c0), Math.abs(c1)) &&
        Math.abs(d0 - d1) <= epsilon * Math.max(1, Math.abs(d0), Math.abs(d1)) &&
        Math.abs(tx0 - tx1) <= epsilon * Math.max(1, Math.abs(tx0), Math.abs(tx1)) &&
        Math.abs(ty0 - ty1) <= epsilon * Math.max(1, Math.abs(ty0), Math.abs(ty1)));
}

//  Compares the a and b matrix and returns if they are equal.
function ExactEquals(a, b) {
    return (a.a === b.a &&
        a.b === b.b &&
        a.c === b.c &&
        a.d === b.d &&
        a.tx === b.tx &&
        a.ty === b.ty);
}

function Rotate$1(src, angle) {
    const { a, b, c, d } = src;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    return new Matrix2D(a * cos + c * sin, b * cos + d * sin, a * -sin + c * cos, b * -sin + d * cos);
}

function FromRotation(angle) {
    return Rotate$1(new Matrix2D(), angle);
}

function Scale$1(src, scaleX, scaleY) {
    return new Matrix2D(src.a * scaleX, src.b * scaleX, src.c * scaleY, src.d * scaleY);
}

function FromScaling(scaleX, scaleY = scaleX) {
    return Scale$1(new Matrix2D(), scaleX, scaleY);
}

function Translate$1(src, x, y) {
    const { a, b, c, d, tx, ty } = src;
    const dtx = a * x + c * y + tx;
    const dty = b * x + d * y + ty;
    return new Matrix2D(1, 0, 0, 1, dtx, dty);
}

function FromTranslation(x, y) {
    return Translate$1(new Matrix2D(), x, y);
}

function Identity() {
    return new Matrix2D();
}

//  Inverts the src Matrix and returns the result in a new Matrix, or null.
function Invert$1(src) {
    const { a, b, c, d, tx, ty } = src;
    let determinant = (a * d) - (b * c);
    if (!determinant) {
        return null;
    }
    determinant = 1 / determinant;
    return new Matrix2D(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
}

//  Multiplies matrix a by b and returns the result in a new Matrix2D.
function Multiply$1(a, b) {
    const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = a;
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = b;
    return new Matrix2D(a0 * a1 + c0 * b1, b0 * a1 + d0 * b1, a0 * c1 + c0 * d1, b0 * c1 + d0 * d1, a0 * tx1 + c0 * ty1 + tx0, b0 * tx1 + d0 * ty1 + ty0);
}

function MultiplyScalar$1(src, scale) {
    return new Matrix2D(src.a * scale, src.b * scale, src.c * scale, src.d * scale, src.tx * scale, src.ty * scale);
}

function MultiplyScalarAndAdd$1(a, b, scale) {
    return new Matrix2D(a.a + (b.a * scale), a.b + (b.b * scale), a.c + (b.c * scale), a.d + (b.d * scale), a.tx + (b.tx * scale), a.ty + (b.ty * scale));
}

function Subtract$1(a, b) {
    return new Matrix2D(a.a - b.a, a.b - b.b, a.c - b.c, a.c - b.c, a.tx - b.tx, a.ty - b.ty);
}

function Zero$1() {
    return new Matrix2D(0, 0, 0, 0, 0, 0);
}

//  Phaser.Math.Matrix2dFuncs
var index$6 = {
    Add: Add$1,
    Append,
    Clone,
    Equals,
    ExactEquals,
    FromRotation,
    FromScaling,
    FromTranslation,
    Identity,
    Invert: Invert$1,
    Multiply: Multiply$1,
    MultiplyScalar: MultiplyScalar$1,
    MultiplyScalarAndAdd: MultiplyScalarAndAdd$1,
    Rotate: Rotate$1,
    Scale: Scale$1,
    Subtract: Subtract$1,
    Translate: Translate$1,
    Zero: Zero$1
};

var Matrix2dFuncs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$6
});

var index$7 = {
    Vec2
};

var Vec2$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$7
});

//  Phaser.Math
var index$8 = {
    Between,
    FloatBetween,
    Matrix2d,
    Matrix2dFuncs,
    Vec2: Vec2$1
};

var index$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$8
});

function AtlasParser(texture, data) {
    let frames;
    if (Array.isArray(data.textures)) {
        //  TP3 Format
        frames = data.textures[0].frames;
    }
    else if (Array.isArray(data.frames)) {
        //  TP2 Format Array
        frames = data.frames;
    }
    else if (data.hasOwnProperty('frames')) {
        //  TP2 Format Hash
        frames = Object.values(data.frames);
    }
    else {
        console.warn('Invalid Texture Atlas JSON');
    }
    if (frames) {
        let newFrame;
        for (let i = 0; i < frames.length; i++) {
            let src = frames[i];
            //  The frame values are the exact coordinates to cut the frame out of the atlas from
            newFrame = texture.add(src.filename, src.frame.x, src.frame.y, src.frame.w, src.frame.h);
            //  These are the original (non-trimmed) sprite values
            if (src.trimmed) {
                newFrame.setTrim(src.sourceSize.w, src.sourceSize.h, src.spriteSourceSize.x, src.spriteSourceSize.y, src.spriteSourceSize.w, src.spriteSourceSize.h);
            }
            else {
                newFrame.setSourceSize(src.sourceSize.w, src.sourceSize.h);
            }
            if (src.rotated) ;
            if (src.anchor) {
                newFrame.setPivot(src.anchor.x, src.anchor.y);
            }
        }
    }
}

function CreateCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas.getContext('2d');
}

function CanvasTexture(width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    return new Texture(ctx.canvas);
}

function GridTexture(color1, color2, width = 32, height = 32, cols = 2, rows = 2) {
    const ctx = CreateCanvas(width, height);
    const colWidth = width / cols;
    const rowHeight = height / rows;
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = color2;
    for (let y = 0; y < rows; y++) {
        for (let x = (y % 2); x < cols; x += 2) {
            ctx.fillRect(x * colWidth, y * rowHeight, colWidth, rowHeight);
        }
    }
    return new Texture(ctx.canvas);
}

function RenderWebGL(sprite, renderer, shader, startActiveTexture) {
    const texture = sprite.texture;
    if (texture.glIndexCounter < startActiveTexture) {
        renderer.requestTexture(texture);
    }
    if (shader.count === shader.batchSize) {
        shader.flush();
    }
    sprite.uploadBuffers(shader.vertexViewF32, shader.vertexViewU32, shader.count * shader.quadElementSize);
    shader.count++;
}

function Ortho(width, height, near = -1, far = 1) {
    const m00 = -2 * (1 / -width);
    const m11 = -2 * (1 / height);
    const m22 = 2 * (1 / (near - far));
    return new Float32Array([m00, 0, 0, 0, 0, m11, 0, 0, 0, 0, m22, 0, -1, 1, 0, 1]);
}

function CreateFramebuffer(width, height) {
    const gl = GL.get();
    const texture = CreateGLTexture(null, width, height);
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return [texture, framebuffer];
}

class RenderTexture extends Texture {
    constructor(renderer, width = 256, height = width) {
        super(null, width, height);
        this.renderer = renderer;
        const [texture, framebuffer] = CreateFramebuffer(width, height);
        this.glTexture = texture;
        this.glFramebuffer = framebuffer;
        this.projectionMatrix = Ortho(width, height);
        this.cameraMatrix = new Float32Array([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, height, 0, 1]);
    }
    cls() {
        const renderer = this.renderer;
        const gl = renderer.gl;
        renderer.reset(this.glFramebuffer, this.width, this.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        renderer.reset();
        return this;
    }
    batchStart() {
        const renderer = this.renderer;
        renderer.reset(this.glFramebuffer, this.width, this.height);
        renderer.shader.bind(this.projectionMatrix, this.cameraMatrix);
        return this;
    }
    batchDraw(...sprites) {
        const renderer = this.renderer;
        const shader = renderer.shader;
        for (let i = 0; i < sprites.length; i++) {
            RenderWebGL(sprites[i], renderer, shader, renderer.startActiveTexture);
        }
        return this;
    }
    batchEnd() {
        const renderer = this.renderer;
        const shader = renderer.shader;
        shader.flush();
        renderer.reset();
        return this;
    }
    draw(...sprites) {
        this.batchStart();
        this.batchDraw(...sprites);
        this.batchEnd();
        return this;
    }
}

function SolidColorTexture(color = 'rgba(0,0,0,0)', width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    return new Texture(ctx.canvas);
}

function SpriteSheetParser (texture, x, y, width, height, frameConfig) {
    let { frameWidth = null, frameHeight = null, startFrame = 0, endFrame = -1, margin = 0, spacing = 0 } = frameConfig;
    if (!frameHeight) {
        frameHeight = frameWidth;
    }
    //  If missing we can't proceed
    if (frameWidth === null) {
        throw new Error('SpriteSheetParser: Invalid frameWidth');
    }
    const row = Math.floor((width - margin + spacing) / (frameWidth + spacing));
    const column = Math.floor((height - margin + spacing) / (frameHeight + spacing));
    let total = row * column;
    if (total === 0) {
        console.warn('SpriteSheetParser: Frame config will result in zero frames');
    }
    if (startFrame > total || startFrame < -total) {
        startFrame = 0;
    }
    if (startFrame < 0) {
        //  Allow negative skipframes.
        startFrame = total + startFrame;
    }
    if (endFrame !== -1) {
        total = startFrame + (endFrame + 1);
    }
    let fx = margin;
    let fy = margin;
    let ax = 0;
    let ay = 0;
    for (let i = 0; i < total; i++) {
        ax = 0;
        ay = 0;
        let w = fx + frameWidth;
        let h = fy + frameHeight;
        if (w > width) {
            ax = w - width;
        }
        if (h > height) {
            ay = h - height;
        }
        texture.add(i, x + fx, y + fy, frameWidth - ax, frameHeight - ay);
        fx += frameWidth + spacing;
        if (fx + frameWidth > width) {
            fx = margin;
            fy += frameHeight + spacing;
        }
    }
}

class TextureManager {
    constructor() {
        this.textures = new Map();
        this.createDefaultTextures();
    }
    createDefaultTextures() {
        this.add('__BLANK', new Texture(CreateCanvas(32, 32).canvas));
        const missing = CreateCanvas(32, 32);
        missing.strokeStyle = '#0f0';
        missing.moveTo(0, 0);
        missing.lineTo(32, 32);
        missing.stroke();
        missing.strokeRect(0.5, 0.5, 31, 31);
        this.add('__MISSING', new Texture(missing.canvas));
    }
    get(key) {
        if (this.textures.has(key)) {
            return this.textures.get(key);
        }
        else {
            return this.textures.get('__MISSING');
        }
    }
    has(key) {
        return this.textures.has(key);
    }
    add(key, source) {
        let texture;
        if (!this.textures.has(key)) {
            if (source instanceof Texture) {
                texture = source;
            }
            else {
                texture = new Texture(source);
            }
            texture.key = key;
            if (!texture.glTexture) {
                texture.createGL();
            }
            this.textures.set(key, texture);
        }
        return texture;
    }
}

var index$a = {
    AtlasParser,
    CanvasTexture,
    CreateCanvas,
    Frame,
    GridTexture,
    RenderTexture,
    SolidColorTexture,
    SpriteSheetParser,
    Texture,
    TextureManager
};

var index$b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$a
});

//  From Pixi v5
const fragTemplate = [
    'precision mediump float;',
    'void main(void){',
    'float test = 0.1;',
    '%forloop%',
    'gl_FragColor = vec4(0.0);',
    '}',
].join('\n');
function generateSrc(maxIfs) {
    let src = '';
    for (let i = 0; i < maxIfs; ++i) {
        if (i > 0) {
            src += '\nelse ';
        }
        if (i < maxIfs - 1) {
            src += `if(test == ${i}.0){}`;
        }
    }
    return src;
}
function CheckShaderMaxIfStatements (maxIfs, gl) {
    const shader = gl.createShader(gl.FRAGMENT_SHADER);
    while (true) {
        const fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateSrc(maxIfs));
        gl.shaderSource(shader, fragmentSrc);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            maxIfs = (maxIfs / 2) | 0;
        }
        else {
            // valid!
            break;
        }
    }
    return maxIfs;
}

const shaderSource = {
    fragmentShader: `
precision highp float;
varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;
uniform sampler2D uTexture[%count%];
void main (void)
{
    vec4 color;
    %forloop%
    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
}`,
    vertexShader: `
precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute float aTextureId;
attribute vec4 aTintColor;
uniform mat4 uProjectionMatrix;
uniform mat4 uCameraMatrix;
varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;
void main (void)
{
    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vTintColor = aTintColor;
    gl_Position = uProjectionMatrix * uCameraMatrix * vec4(aVertexPosition, 0.0, 1.0);
}`
};
class MultiTextureQuadShader {
    constructor(renderer, config = {}) {
        this.attribs = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };
        this.uniforms = { uProjectionMatrix: 0, uCameraMatrix: 0, uTexture: 0 };
        /**
         * The size, in bytes, per entry in the array buffer.
         *
         * @type {number}
         * @memberof MultiTextureQuadShader
         */
        this.dataSize = 4;
        /**
         * The size, in bytes, per entry in the element index array.
         *
         * @type {number}
         * @memberof MultiTextureQuadShader
         */
        this.indexSize = 4;
        /**
         * The amount of elements / floats a single vertex consists of.
         *
         * The default is 6:
         *
         * position (x,y - 2 floats)
         * texture coord (x,y - 2 floats)
         * texture index (float)
         * packed color (vec4)
         *
         * @type {number}
         * @memberof MultiTextureQuadShader
         */
        this.vertexElementSize = 6;
        /**
         * The size, in bytes, of a single vertex in the array buffer.
         *
         * This is `vertexElementSize * dataSize`.
         *
         * @type {number}
         * @memberof MultiTextureQuadShader
         */
        this.vertexByteSize = 6 * 4;
        /**
         * The size, in bytes, of a single quad in the array buffer.
         *
         * This is `vertexByteSize * 4`.
         *
         * @type {number}
         * @memberof MultiTextureQuadShader
         */
        this.quadByteSize = (6 * 4) * 4;
        /**
         * The size, in quantity of elements, of a single quad in the element index array.
         *
         * This is `vertexElementSize * 4`.
         *
         * @type {number}
         * @memberof MultiTextureQuadShader
         */
        this.quadElementSize = 6 * 4;
        /**
         * The total number of entries per quad in the element index array.
         *
         * The IBO contains 6 entries per quad:
         *
         * 0, 1, 2
         * 2, 3, 0
         *
         * @type {number}
         * @memberof MultiTextureQuadShader
         */
        this.quadIndexSize = 6;
        this.renderer = renderer;
        this.gl = renderer.gl;
        const { batchSize = 4096, fragmentShader = shaderSource.fragmentShader, vertexShader = shaderSource.vertexShader } = config;
        this.batchSize = batchSize;
        this.bufferByteSize = batchSize * this.quadByteSize;
        this.createBuffers();
        this.createShaders(fragmentShader, vertexShader);
        this.count = 0;
    }
    createBuffers() {
        let ibo = [];
        //  Seed the index buffer
        for (let i = 0; i < (this.batchSize * this.indexSize); i += this.indexSize) {
            ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
        }
        this.data = new ArrayBuffer(this.bufferByteSize);
        this.index = new Uint16Array(ibo);
        this.vertexViewF32 = new Float32Array(this.data);
        this.vertexViewU32 = new Uint32Array(this.data);
        const gl = this.gl;
        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.DYNAMIC_DRAW);
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);
        //  Tidy-up
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        ibo = [];
    }
    createShaders(fragmentShaderSource, vertexShaderSource) {
        const gl = this.gl;
        const maxTextures = this.renderer.maxTextures;
        let src = '';
        if (maxTextures > 1) {
            for (let i = 0; i < maxTextures; i++) {
                if (i > 0) {
                    src += '\nelse ';
                }
                if (i < maxTextures - 1) {
                    src += `if (vTextureId < ${i}.5)`;
                }
                src += '\n{';
                src += `\n  color = texture2D(uTexture[${i}], vTextureCoord);`;
                src += '\n}';
            }
            fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);
            fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);
        }
        else {
            src = 'color = texture2D(uTexture[0], vTextureCoord);';
        }
        //  Create the shaders
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        this.program = program;
        for (let key of Object.keys(this.attribs)) {
            let location = gl.getAttribLocation(program, key);
            gl.enableVertexAttribArray(location);
            this.attribs[key] = location;
        }
        for (let key of Object.keys(this.uniforms)) {
            this.uniforms[key] = gl.getUniformLocation(program, key);
        }
    }
    bind(projectionMatrix, cameraMatrix) {
        const gl = this.gl;
        const renderer = this.renderer;
        const uniforms = this.uniforms;
        gl.useProgram(this.program);
        gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);
        gl.uniform1iv(uniforms.uTexture, renderer.textureIndex);
        this.bindBuffers(this.indexBuffer, this.vertexBuffer);
    }
    bindBuffers(indexBuffer, vertexBuffer) {
        const gl = this.gl;
        const stride = this.vertexByteSize;
        const attribs = this.attribs;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        //  attributes must be reset whenever you change buffers
        gl.vertexAttribPointer(attribs.aVertexPosition, 2, gl.FLOAT, false, stride, 0); // size = 8
        gl.vertexAttribPointer(attribs.aTextureCoord, 2, gl.FLOAT, false, stride, 8); // size = 8, offset = position
        gl.vertexAttribPointer(attribs.aTextureId, 1, gl.FLOAT, false, stride, 16); // size = 4, offset = position + tex coord
        gl.vertexAttribPointer(attribs.aTintColor, 4, gl.UNSIGNED_BYTE, true, stride, 20); // size = 4, offset = position + tex coord + index
        this.count = 0;
    }
    draw(count) {
        const gl = this.gl;
        const offset = count * this.quadByteSize;
        if (offset === this.bufferByteSize) {
            gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.DYNAMIC_DRAW);
        }
        else {
            let view = this.vertexViewF32.subarray(0, offset);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        }
        gl.drawElements(gl.TRIANGLES, count * this.quadIndexSize, gl.UNSIGNED_SHORT, 0);
    }
    flush() {
        const count = this.count;
        if (count === 0) {
            return false;
        }
        this.draw(count);
        this.prevCount = count;
        this.count = 0;
        this.renderer.flushTotal++;
        return true;
    }
}

class WebGLRenderer {
    constructor(width, height, resolution) {
        this.contextOptions = {
            alpha: false,
            antialias: false,
            premultipliedAlpha: false,
            stencil: false,
            preserveDrawingBuffer: false,
            desynchronized: false
        };
        this.clearColor = [0, 0, 0, 1];
        this.flushTotal = 0;
        this.maxTextures = 0;
        this.currentActiveTexture = 0;
        this.startActiveTexture = 0;
        this.tempTextures = [];
        this.clearBeforeRender = true;
        this.optimizeRedraw = true;
        this.autoResize = true;
        this.contextLost = false;
        this.width = width;
        this.height = height;
        this.resolution = resolution;
        const canvas = document.createElement('canvas');
        canvas.addEventListener('webglcontextlost', (event) => this.onContextLost(event), false);
        canvas.addEventListener('webglcontextrestored', () => this.onContextRestored(), false);
        this.canvas = canvas;
        this.initContext();
        this.shader = new MultiTextureQuadShader(this);
    }
    initContext() {
        const gl = this.canvas.getContext('webgl', this.contextOptions);
        GL.set(gl);
        this.gl = gl;
        this.elementIndexExtension = gl.getExtension('OES_element_index_uint');
        this.getMaxTextures();
        if (this.shader) {
            this.shader.gl = gl;
        }
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        this.resize(this.width, this.height, this.resolution);
    }
    resize(width, height, resolution = 1) {
        this.width = width * resolution;
        this.height = height * resolution;
        this.resolution = resolution;
        const canvas = this.canvas;
        canvas.width = this.width;
        canvas.height = this.height;
        if (this.autoResize) {
            canvas.style.width = this.width / resolution + 'px';
            canvas.style.height = this.height / resolution + 'px';
        }
        this.gl.viewport(0, 0, this.width, this.height);
        this.projectionMatrix = Ortho(width, height);
    }
    onContextLost(event) {
        event.preventDefault();
        this.contextLost = true;
    }
    onContextRestored() {
        this.contextLost = false;
        this.initContext();
    }
    setBackgroundColor(color) {
        const clearColor = this.clearColor;
        const r = color >> 16 & 0xFF;
        const g = color >> 8 & 0xFF;
        const b = color & 0xFF;
        const a = (color > 16777215) ? color >>> 24 : 255;
        clearColor[0] = r / 255;
        clearColor[1] = g / 255;
        clearColor[2] = b / 255;
        clearColor[3] = a / 255;
        return this;
    }
    getMaxTextures() {
        const gl = this.gl;
        let maxTextures = CheckShaderMaxIfStatements(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), gl);
        const tempTextures = this.tempTextures;
        if (tempTextures.length) {
            tempTextures.forEach(texture => {
                gl.deleteTexture(texture);
            });
        }
        //  Create temp textures to stop WebGL errors on mac os
        for (let i = 0; i < maxTextures; i++) {
            let tempTexture = gl.createTexture();
            gl.activeTexture(gl.TEXTURE0 + i);
            gl.bindTexture(gl.TEXTURE_2D, tempTexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
            tempTextures[i] = tempTexture;
        }
        this.maxTextures = maxTextures;
        this.textureIndex = Array.from(Array(maxTextures).keys());
        this.activeTextures = Array(maxTextures);
        this.currentActiveTexture = 0;
    }
    reset(framebuffer = null, width = this.width, height = this.height) {
        const gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.viewport(0, 0, width, height);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        this.currentActiveTexture = 0;
        this.startActiveTexture++;
        this.flushTotal = 0;
    }
    render(sceneList, dirtyFrame, dirtyCameras) {
        if (this.contextLost) {
            return;
        }
        const gl = this.gl;
        const flushTotal = this.flushTotal;
        //  This is only here because if we don't do _something_ with the context, GL Spector can't see it.
        //  Technically, we could move it below the dirty bail-out below.
        this.reset();
        //  Cache 1 - Nothing dirty? Display the previous frame
        if (this.optimizeRedraw && dirtyFrame === 0 && dirtyCameras === 0) {
            return;
        }
        const shader = this.shader;
        const cls = this.clearColor;
        if (this.clearBeforeRender) {
            gl.clearColor(cls[0], cls[1], cls[2], cls[3]);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        const projectionMatrix = this.projectionMatrix;
        //  Cache 2 - Only one dirty camera and one flush? We can re-use the buffers
        /*
        if (dirtyCameras === 1 && dirtyFrame === 0 && flushTotal === 1)
        {
            //  Total items rendered in the previous frame
            const count = shader.prevCount;

            shader.bind(projectionMatrix, sceneList[0].matrix);

            shader.draw(count);

            shader.prevCount = count;

            this.flushTotal = 1;

            return;
        }
        */
        let prevCamera;
        for (let c = 0; c < sceneList.length; c += 2) {
            let camera = sceneList[c];
            let list = sceneList[c + 1];
            //  This only needs rebinding if the camera matrix is different to before
            if (!prevCamera || !ExactEquals(camera.worldTransform, prevCamera.worldTransform)) {
                shader.flush();
                shader.bind(projectionMatrix, camera.matrix);
                prevCamera = camera;
            }
            //  Process the render list
            for (let i = 0; i < list.length; i++) {
                RenderWebGL(list[i], this, shader, this.startActiveTexture);
            }
        }
        //  One final sweep
        shader.flush();
    }
    resetTextures(texture) {
        const gl = this.gl;
        const active = this.activeTextures;
        active.fill(null);
        this.currentActiveTexture = 0;
        this.startActiveTexture++;
        if (texture) {
            //  Set this texture as texture0
            active[0] = texture;
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture.glTexture);
            this.currentActiveTexture = 1;
        }
    }
    requestTexture(texture) {
        const gl = this.gl;
        texture.glIndexCounter = this.startActiveTexture;
        if (this.currentActiveTexture < this.maxTextures) {
            //  Make this texture active
            this.activeTextures[this.currentActiveTexture] = texture;
            texture.glIndex = this.currentActiveTexture;
            gl.activeTexture(gl.TEXTURE0 + this.currentActiveTexture);
            gl.bindTexture(gl.TEXTURE_2D, texture.glTexture);
            this.currentActiveTexture++;
        }
        else {
            //  We're out of textures, so flush the batch and reset them all
            this.shader.flush();
            this.resetTextures(texture);
        }
    }
}

function GetConfigValue(config, property, defaultValue) {
    if (config.hasOwnProperty(property)) {
        return config[property];
    }
    else {
        return defaultValue;
    }
}

class SceneManager {
    constructor(game) {
        this.sceneIndex = 0;
        //  Flush the cache
        this.flush = false;
        //  How many Cameras were made dirty this frame across all Scenes?
        this.dirtyCameras = 0;
        //  How many Game Objects were made dirty this frame across all Scenes?
        this.dirtyFrame = 0;
        //  How many Game Objects were processed this frame across all Scenes?
        this.totalFrame = 0;
        this.game = game;
        this.scenes = new Map();
        this.renderList = [];
    }
    boot(scenes) {
        scenes.forEach(scene => {
            this.add(scene);
        });
    }
    add(scene) {
        const instance = new scene();
        //  At this point the act of creating a new instance of the Scene
        //  will have invoked the init method below, so we can now safely
        //  add the Scene into our Map
        if (instance.willUpdate) {
            instance.boot.call(instance);
        }
    }
    init(scene, config = {}) {
        const size = this.scenes.size;
        const sceneIndex = this.sceneIndex;
        const firstScene = (size === 0);
        if (typeof config === 'string') {
            scene.key = config;
        }
        else if (config || (!config && firstScene)) {
            scene.key = GetConfigValue(config, 'key', 'scene' + sceneIndex);
            scene.willUpdate = GetConfigValue(config, 'willUpdate', firstScene);
            scene.willRender = GetConfigValue(config, 'willRender', firstScene);
        }
        if (this.scenes.has(scene.key)) {
            console.warn('Scene key already in use: ' + scene.key);
        }
        else {
            this.scenes.set(scene.key, scene);
            this.flush = true;
            this.sceneIndex++;
        }
    }
    update(delta, now) {
        for (const scene of this.scenes.values()) {
            if (scene.willUpdate) {
                scene.update.call(scene, delta, now);
                scene.world.update(delta, now);
            }
        }
    }
    render(gameFrame) {
        const renderList = this.renderList;
        renderList.length = 0;
        this.dirtyCameras = 0;
        this.dirtyFrame = 0;
        this.totalFrame = 0;
        for (let scene of this.scenes.values()) {
            if (scene.willRender) {
                let world = scene.world;
                this.dirtyFrame += world.render(gameFrame);
                this.totalFrame += world.totalFrame;
                if (world.renderList.length === 0) {
                    continue;
                }
                if (world.camera.dirtyRender) {
                    this.dirtyCameras++;
                    world.camera.dirtyRender = false;
                }
                renderList.push(world.camera);
                renderList.push(world.renderList);
            }
        }
        if (this.flush) {
            //  Invalidate the renderer cache
            this.dirtyFrame++;
            //  And reset
            this.flush = false;
        }
        return [renderList, this.dirtyFrame, this.dirtyCameras];
    }
}

class EE {
    constructor(callback, context, once = false) {
        this.callback = callback;
        this.context = context;
        this.once = once;
    }
}
class EventEmitter {
    constructor() {
        this._events = new Map();
    }
    on(event, callback, context = this, once = false) {
        if (typeof callback !== 'function') {
            throw new TypeError('The listener must be a function');
        }
        const listener = new EE(callback, context, once);
        const listeners = this._events.get(event);
        if (!listeners) {
            this._events.set(event, new Set([listener]));
        }
        else {
            listeners.add(listener);
        }
        return this;
    }
    once(event, callback, context = this) {
        return this.on(event, callback, context, true);
    }
    /**
     * Clear an event by name.
     */
    clearEvent(event) {
        this._events.delete(event);
        return this;
    }
    /**
     * Return an array listing the events for which the emitter has registered listeners.
     */
    eventNames() {
        return [...this._events.keys()];
    }
    /**
     * Return the listeners registered for a given event.
     */
    listeners(event) {
        const out = [];
        const listeners = this._events.get(event);
        listeners.forEach((ee) => {
            out.push(ee.callback);
        });
        return out;
    }
    /**
     * Return the number of listeners listening to a given event.
     */
    listenerCount(event) {
        const listeners = this._events.get(event);
        return (listeners) ? listeners.size : 0;
    }
    /**
     * Calls each of the listeners registered for a given event.
     */
    emit(event, ...args) {
        if (!this._events.has(event)) {
            return false;
        }
        const listeners = this._events.get(event);
        for (const ee of listeners) {
            ee.callback.apply(ee.context, args);
            if (ee.once) {
                listeners.delete(ee);
            }
        }
        if (listeners.size === 0) {
            this._events.delete(event);
        }
        return true;
    }
    /**
     * Remove the listeners of a given event.
     *
     * @param event
     * @param callback
     * @param context
     * @param once
     */
    off(event, callback, context, once) {
        if (!callback) {
            //  Remove all events matching the given key
            this._events.delete(event);
        }
        else {
            const listeners = this._events.get(event);
            const hasContext = !context;
            const hasOnce = (once !== undefined);
            for (const ee of listeners) {
                if (ee.callback === callback && (hasContext && ee.context === console) && (hasOnce && ee.once === once)) {
                    listeners.delete(ee);
                }
            }
            if (listeners.size === 0) {
                this._events.delete(event);
            }
        }
        return this;
    }
    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param event
     */
    removeAllListeners(event) {
        if (!event) {
            this._events.clear();
        }
        else {
            this._events.delete(event);
        }
    }
}

class Game extends EventEmitter {
    constructor(config) {
        super();
        this.VERSION = '4.0.0-beta1';
        this.isPaused = false;
        this.isBooted = false;
        this.lifetime = 0;
        this.elapsed = 0;
        //  The current game frame
        this.frame = 0;
        const { width = 800, height = 600, resolution = 1, backgroundColor = 0x00000, parent = document.body, scene = null } = config;
        this.config = { width, height, resolution, backgroundColor, parent, scene };
        this.cache = {
            json: new Map(),
            csv: new Map(),
            xml: new Map()
        };
        GameInstance.set(this);
        DOMContentLoaded(() => this.boot());
    }
    pause() {
        this.isPaused = true;
        this.emit('pause');
    }
    resume() {
        this.isPaused = false;
        this.lastTick = Date.now();
        this.emit('resume');
    }
    boot() {
        const config = this.config;
        this.isBooted = true;
        this.lastTick = Date.now();
        const renderer = new WebGLRenderer(config.width, config.height, config.resolution);
        renderer.setBackgroundColor(config.backgroundColor);
        AddToDOM(renderer.canvas, config.parent);
        this.renderer = renderer;
        this.textures = new TextureManager();
        this.scenes = new SceneManager(this);
        this.banner(this.VERSION);
        this.scenes.boot([].concat(config.scene));
        //  Visibility API
        document.addEventListener('visibilitychange', () => {
            this.emit('visibilitychange', document.hidden);
            if (document.hidden) {
                this.pause();
            }
            else {
                this.resume();
            }
        });
        // window.addEventListener('blur', () => this.pause());
        // window.addEventListener('focus', () => this.resume());
        this.emit('boot');
        requestAnimationFrame(() => this.step());
    }
    banner(version) {
        console.log('%cPhaser v' + version + '%c https://phaser4.io', 'padding: 4px 16px; color: #fff; background: linear-gradient(#3e0081 40%, #00bcc3)', '');
    }
    step() {
        const now = Date.now();
        const delta = now - this.lastTick;
        const dt = delta / 1000;
        this.lifetime += dt;
        this.elapsed = dt;
        this.lastTick = now;
        this.emit('step', dt, now);
        const sceneManager = this.scenes;
        if (!this.isPaused) {
            sceneManager.update(dt, now);
        }
        this.emit('update', dt, now);
        //  TODO: Optimize to remove const and array creation here:
        const [renderList, dirtyFrame, dirtyCameras] = sceneManager.render(this.frame);
        this.renderer.render(renderList, dirtyFrame, dirtyCameras);
        this.emit('render', dt, now);
        //  The frame always advances by 1 each step (even when paused)
        this.frame++;
        requestAnimationFrame(() => this.step());
    }
    destroy() {
        //  TODO
    }
}

class Camera extends TransformGameObject {
    constructor(x = 0, y = 0) {
        super(x, y);
        this.type = 'Camera';
        const game = GameInstance.get();
        this.renderer = game.renderer;
        this.reset();
    }
    updateTransform() {
        if (!this.renderer) {
            return this;
        }
        this.dirtyRender = true;
        const lt = this.localTransform;
        const wt = this.worldTransform;
        lt.tx = 0 - this.x;
        lt.ty = 0 - this.y;
        const mat = this.matrix;
        const { a, b, c, d, tx, ty } = lt;
        const viewportW = this.renderer.width * this.originX;
        const viewportH = this.renderer.height * this.originY;
        mat[0] = a;
        mat[1] = b;
        mat[4] = c;
        mat[5] = d;
        //  combines viewport translation + scrollX/Y
        const worldX = (a * -viewportW) + (c * -viewportH) + (viewportW + tx);
        const worldY = (b * -viewportW) + (d * -viewportH) + (viewportH + ty);
        mat[12] = worldX;
        mat[13] = worldY;
        //  Store in worldTransform
        wt.set(a, b, c, d, worldX, worldY);
        // mat[12] = viewportW + tx; // combines translation to center of viewport + scrollX
        // mat[13] = viewportH + ty; // combines translation to center of viewport + scrollY
        // this.translate(-viewportW, -viewportH);
        // console.log(mat);
        this.bounds.x = worldX * -1;
        this.bounds.y = worldY * -1;
        return this;
    }
    reset() {
        this.matrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        const width = this.renderer.width;
        const height = this.renderer.height;
        this.setSize(width, height);
        this.setBounds(0, 0, width, height);
    }
    destroy() {
        super.destroy();
        this.renderer = null;
        this.matrix = null;
    }
}

function RectangleToRectangle(rectA, rectB) {
    if (rectA.width <= 0 || rectA.height <= 0 || rectB.width <= 0 || rectB.height <= 0) {
        return false;
    }
    return !(rectA.right < rectB.x || rectA.bottom < rectB.y || rectA.x > rectB.right || rectA.y > rectB.bottom);
}

class World {
    constructor(scene) {
        //  How many Game Objects were made dirty this frame?
        this.dirtyFrame = 0;
        //  How many Game Objects will be rendered this frame? (are in-bounds)
        this.totalFrame = 0;
        //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
        this.visibleFrame = 0;
        //  How many Game Objects were out of bounds this frame?
        this.boundsFrame = 0;
        this.forceRefresh = false;
        this.enableCameraCull = true;
        this.scene = scene;
        this.children = [];
        this.renderList = [];
        this.worldTransform = new Matrix2D();
        this.camera = new Camera();
    }
    scanChildren(root, gameFrame) {
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
            this.buildRenderList(children[i], gameFrame);
        }
    }
    buildRenderList(root, gameFrame) {
        if (root.isRenderable()) {
            const cull = this.enableCameraCull;
            if (!cull || (cull && RectangleToRectangle(root.getBounds(), this.camera.bounds))) {
                this.renderList.push(root);
                if (root.dirtyFrame >= gameFrame) {
                    this.dirtyFrame++;
                }
            }
            this.visibleFrame++;
        }
        if (root.isParent && root.visible) {
            this.scanChildren(root, gameFrame);
        }
    }
    update(delta, time) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child && child.willUpdate) {
                child.update(delta, time);
            }
        }
    }
    render(gameFrame) {
        this.dirtyFrame = 0;
        this.boundsFrame = 0;
        this.visibleFrame = 0;
        this.renderList.length = 0;
        this.scanChildren(this, gameFrame);
        this.totalFrame = this.renderList.length;
        if (this.forceRefresh) {
            this.dirtyFrame++;
            this.forceRefresh = false;
        }
        return this.dirtyFrame;
    }
    shutdown() {
        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage
        // this.removeChildren();
        this.renderList = [];
        this.camera.reset();
    }
    destroy() {
        this.camera.destroy();
        this.camera = null;
        this.renderList = null;
    }
    get numChildren() {
        return this.children.length;
    }
}

class Scene {
    constructor(config) {
        this.willUpdate = false;
        this.willRender = false;
        this.game = GameInstance.get();
        this.world = new World(this);
        this.game.scenes.init(this, config);
    }
    boot() {
    }
    update() {
    }
    render() {
    }
    shutdown() {
    }
    destroy() {
        this.world.destroy();
        this.world = null;
        this.game = null;
    }
}

class StaticCamera {
    constructor(scene) {
        this.scene = scene;
        this.renderer = scene.game.renderer;
        this.matrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        this.bounds = new Rectangle();
        this.reset();
    }
    reset() {
        const width = this.renderer.width;
        const height = this.renderer.height;
        this.width = width;
        this.height = height;
        this.bounds.set(0, 0, width, height);
    }
    destroy() {
        this.scene = null;
        this.renderer = null;
        this.matrix = null;
        this.bounds = null;
    }
}

//  A Static World is designed specifically to have a bounds of a fixed size
//  and a camera that doesn't move at all (no scrolling, rotation, etc)
//  Because it has a fixed size, there is no camera culling enabled.
//  Games that use this kind of world include Pacman, Bejeweled and 2048.
class StaticWorld {
    constructor(scene) {
        //  How many Game Objects were made dirty this frame?
        this.dirtyFrame = 0;
        //  How many Game Objects will be rendered this frame? (are in-bounds)
        this.totalFrame = 0;
        //  How many Game Objects passed `willRender` this frame? (but may not have been in bounds)
        this.visibleFrame = 0;
        this.forceRefresh = false;
        this.scene = scene;
        this.children = [];
        this.renderList = [];
        this.worldTransform = new Matrix2D();
        this.camera = new StaticCamera(scene);
    }
    scanChildren(root, gameFrame) {
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
            this.buildRenderList(children[i], gameFrame);
        }
    }
    buildRenderList(root, gameFrame) {
        if (root.isRenderable()) {
            this.renderList.push(root);
            if (root.dirtyFrame >= gameFrame) {
                this.dirtyFrame++;
            }
            this.visibleFrame++;
        }
        if (root.isParent && root.visible) {
            this.scanChildren(root, gameFrame);
        }
    }
    update(delta, time) {
        const children = this.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child && child.willUpdate) {
                child.update(delta, time);
            }
        }
    }
    render(gameFrame) {
        this.dirtyFrame = 0;
        this.visibleFrame = 0;
        this.renderList.length = 0;
        this.scanChildren(this, gameFrame);
        this.totalFrame = this.renderList.length;
        if (this.forceRefresh) {
            this.dirtyFrame++;
            this.forceRefresh = false;
        }
        return this.dirtyFrame;
    }
    shutdown() {
        //  Clear the display list and reset the camera, but leave
        //  everything in place so we can return to this World again
        //  at a later stage
        // this.removeChildren();
        this.renderList = [];
        this.camera.reset();
    }
    destroy() {
        this.camera.destroy();
        this.camera = null;
        this.renderList = null;
    }
    get numChildren() {
        return this.children.length;
    }
}

class StaticScene {
    constructor(config) {
        this.willUpdate = false;
        this.willRender = false;
        this.game = GameInstance.get();
        this.world = new StaticWorld(this);
        this.game.scenes.init(this, config);
    }
    boot() {
    }
    update() {
    }
    render() {
    }
    shutdown() {
    }
    destroy() {
        this.world.destroy();
        this.world = null;
        this.game = null;
    }
}

class Loader extends EventEmitter {
    constructor() {
        super();
        this.baseURL = '';
        this.path = '';
        this.crossOrigin = 'anonymous';
        //  -1 means load everything at once (only recommended on http/2 servers)
        this.maxParallelDownloads = -1;
        this.isLoading = false;
        this.reset();
    }
    reset() {
        this.isLoading = false;
        this.queue = new Set();
        this.inflight = new Set();
        this.completed = new Set();
        this.progress = 0;
    }
    add(...file) {
        file.forEach(entity => {
            entity.loader = this;
            this.queue.add(entity);
        });
        return this;
    }
    start(onComplete) {
        if (this.isLoading) {
            return;
        }
        this.completed.clear();
        this.progress = 0;
        if (this.queue.size > 0) {
            this.isLoading = true;
            this.onComplete = onComplete;
            this.emit('start');
            this.nextFile();
        }
        else {
            this.progress = 1;
            this.emit('complete');
            onComplete();
        }
        return this;
    }
    nextFile() {
        let limit = this.queue.size;
        if (this.maxParallelDownloads !== -1) {
            limit = Math.min(limit, this.maxParallelDownloads) - this.inflight.size;
        }
        if (limit) {
            // console.log('Batching', limit, 'files to download');
            const iterator = this.queue.values();
            while (limit > 0) {
                const file = iterator.next().value;
                // console.log('Loader.nextFile', file.key, '=>', file.url);
                this.inflight.add(file);
                this.queue.delete(file);
                file.load().then((file) => this.fileComplete(file)).catch((file) => this.fileError(file));
                limit--;
            }
        }
        else if (this.inflight.size === 0) {
            this.stop();
        }
    }
    stop() {
        this.isLoading = false;
        this.emit('complete', this.completed);
        this.onComplete();
        this.completed.clear();
    }
    updateProgress(file) {
        this.inflight.delete(file);
        this.completed.add(file);
        const totalCompleted = this.completed.size;
        const totalQueued = this.queue.size + this.inflight.size;
        if (totalCompleted > 0) {
            this.progress = totalCompleted / (totalCompleted + totalQueued);
        }
        this.emit('progress', this.progress, totalCompleted, totalQueued);
        this.nextFile();
    }
    fileComplete(file) {
        this.emit('filecomplete', file);
        this.updateProgress(file);
    }
    fileError(file) {
        this.emit('fileerror', file);
        this.updateProgress(file);
    }
    totalFilesToLoad() {
        return this.queue.size + this.inflight.size;
    }
    setBaseURL(url = '') {
        if (url !== '' && url.substr(-1) !== '/') {
            url = url.concat('/');
        }
        this.baseURL = url;
        return this;
    }
    setPath(path = '') {
        if (path !== '' && path.substr(-1) !== '/') {
            path = path.concat('/');
        }
        this.path = path;
        return this;
    }
    setCORS(crossOrigin) {
        this.crossOrigin = crossOrigin;
        return this;
    }
    setMaxParallelDownloads(max) {
        this.maxParallelDownloads = max;
        return this;
    }
}

export { index$2 as DOM, index$1 as Device, EventEmitter, Game, index$4 as GameObjects, Loader, index$9 as Math, Scene, StaticScene, index$b as Textures, WebGLRenderer };
//# sourceMappingURL=Phaser4.esm.js.map
