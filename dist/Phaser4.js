(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Phaser4 = {}));
}(this, (function (exports) { 'use strict';

    let instance;
    let frame = 0;
    let elapsed = 0;
    const GameInstance = {
        get: () => {
            return instance;
        },
        set: (game) => {
            instance = game;
        },
        getFrame: () => {
            return frame;
        },
        setFrame: (current) => {
            frame = current;
        },
        getElapsed: () => {
            return elapsed;
        },
        setElapsed: (current) => {
            elapsed = current;
        }
    };

    class Matrix2D {
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
    }

    function Contains(rect, x, y) {
        if (rect.width <= 0 || rect.height <= 0) {
            return false;
        }
        return (rect.x <= x && rect.x + rect.width >= x && rect.y <= y && rect.y + rect.height >= y);
    }

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
        contains(x, y) {
            return Contains(this, x, y);
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
    }

    function NOOP() {
    }

    class Vec2Callback {
        constructor(callback, x = 0, y = 0, compareValue = false) {
            this.compareValue = false;
            this._x = x;
            this._y = y;
            this.callback = callback;
            this.compareValue = compareValue;
        }
        set(x = 0, y = 0) {
            this._x = x;
            this._y = y;
            this.callback(this);
            return this;
        }
        destroy() {
            this.callback = NOOP;
        }
        set x(value) {
            if (!this.compareValue || (this.compareValue && value !== this._x)) {
                this._x = value;
                this.callback(this);
            }
        }
        get x() {
            return this._x;
        }
        set y(value) {
            if (!this.compareValue || (this.compareValue && value !== this._x)) {
                this._y = value;
                this.callback(this);
            }
        }
        get y() {
            return this._y;
        }
    }

    function AngleBetween(x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    }

    function AngleBetweenPoints(point1, point2) {
        return Math.atan2(point2.y - point1.y, point2.x - point1.x);
    }

    function AngleBetweenPointsY(point1, point2) {
        return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    function AngleBetweenY(x1, y1, x2, y2) {
        return Math.atan2(x2 - x1, y2 - y1);
    }

    const MATH_CONST = {
        PI2: Math.PI * 2,
        HALF_PI: Math.PI * 0.5,
        EPSILON: 1.0e-6,
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER || -9007199254740991,
        MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991
    };

    function CounterClockwise(angle) {
        if (angle > Math.PI) {
            angle -= MATH_CONST.PI2;
        }
        return Math.abs((((angle + MATH_CONST.HALF_PI) % MATH_CONST.PI2) - MATH_CONST.PI2) % MATH_CONST.PI2);
    }

    function NormalizeAngle(angle) {
        angle = angle % MATH_CONST.PI2;
        if (angle >= 0) {
            return angle;
        }
        else {
            return angle + MATH_CONST.PI2;
        }
    }

    function ReverseAngle(angle) {
        return NormalizeAngle(angle + Math.PI);
    }

    function RotateAngleTo(currentAngle, targetAngle, lerp = 0.05) {
        if (currentAngle === targetAngle) {
            return currentAngle;
        }
        if (Math.abs(targetAngle - currentAngle) <= lerp || Math.abs(targetAngle - currentAngle) >= (MATH_CONST.PI2 - lerp)) {
            currentAngle = targetAngle;
        }
        else {
            if (Math.abs(targetAngle - currentAngle) > Math.PI) {
                if (targetAngle < currentAngle) {
                    targetAngle += MATH_CONST.PI2;
                }
                else {
                    targetAngle -= MATH_CONST.PI2;
                }
            }
            if (targetAngle > currentAngle) {
                currentAngle += lerp;
            }
            else if (targetAngle < currentAngle) {
                currentAngle -= lerp;
            }
        }
        return currentAngle;
    }

    function ShortestAngleBetween(angle1, angle2) {
        const difference = angle2 - angle1;
        if (difference === 0) {
            return 0;
        }
        const times = Math.floor((difference - (-180)) / 360);
        return difference - (times * 360);
    }

    function Wrap(value, min, max) {
        const range = max - min;
        return (min + ((((value - min) % range) + range) % range));
    }

    function WrapAngle(angle) {
        return Wrap(angle, -Math.PI, Math.PI);
    }

    function WrapAngleDegrees(angle) {
        return Wrap(angle, -180, 180);
    }

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AngleBetween: AngleBetween,
        AngleBetweenPoints: AngleBetweenPoints,
        AngleBetweenPointsY: AngleBetweenPointsY,
        AngleBetweenY: AngleBetweenY,
        CounterClockwise: CounterClockwise,
        NormalizeAngle: NormalizeAngle,
        ReverseAngle: ReverseAngle,
        RotateAngleTo: RotateAngleTo,
        ShortestAngleBetween: ShortestAngleBetween,
        WrapAngle: WrapAngle,
        WrapAngleDegrees: WrapAngleDegrees
    });

    class Camera {
        constructor() {
            this._rotation = 0;
            this.type = 'Camera';
            this.dirtyRender = true;
            const game = GameInstance.get();
            this.renderer = game.renderer;
            this.matrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
            this.bounds = new Rectangle();
            this.worldTransform = new Matrix2D();
            this.position = new Vec2Callback(() => this.updateTransform(), 0, 0);
            this.scale = new Vec2Callback(() => this.updateTransform(), 1, 1);
            this.origin = new Vec2Callback(() => this.updateTransform(), 0.5, 0.5);
            this.reset();
        }
        updateTransform() {
            const matrix = this.matrix;
            const px = this.position.x;
            const py = this.position.y;
            const sx = this.scale.x;
            const sy = this.scale.y;
            const ox = -px + (this.width * this.origin.x);
            const oy = -py + (this.height * this.origin.y);
            const z = Math.sin(this.rotation);
            const w = Math.cos(this.rotation);
            const z2 = z + z;
            const zz = z * z2;
            const wz = w * z2;
            const out0 = (1 - zz) * sx;
            const out1 = wz * sx;
            const out4 = -wz * sy;
            const out5 = (1 - zz) * sy;
            matrix[0] = out0;
            matrix[1] = out1;
            matrix[4] = out4;
            matrix[5] = out5;
            matrix[12] = px + ox - (out0 * ox + out4 * oy);
            matrix[13] = py + oy - (out1 * ox + out5 * oy);
            this.worldTransform.set(w * sx, z * sx, -z * sy, w * sy, -px, -py);
            const bw = this.width * (1 / sx);
            const bh = this.height * (1 / sy);
            this.bounds.set(ox - (bw / 2), oy - (bh / 2), bw, bh);
            this.dirtyRender = true;
        }
        reset() {
            const width = this.renderer.width;
            const height = this.renderer.height;
            this.width = width;
            this.height = height;
            this.bounds.set(0, 0, width, height);
        }
        set rotation(value) {
            if (value !== this._rotation) {
                this._rotation = WrapAngle(value);
                this.updateTransform();
            }
        }
        get rotation() {
            return this._rotation;
        }
        destroy() {
            this.position.destroy();
            this.scale.destroy();
            this.origin.destroy();
            this.world = null;
            this.worldTransform = null;
            this.renderer = null;
            this.matrix = null;
            this.bounds = null;
        }
    }

    class StaticCamera {
        constructor() {
            this.type = 'StaticCamera';
            this.dirtyRender = true;
            const game = GameInstance.get();
            this.renderer = game.renderer;
            this.matrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            this.bounds = new Rectangle();
            this.worldTransform = new Matrix2D();
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
            this.world = null;
            this.worldTransform = null;
            this.renderer = null;
            this.matrix = null;
            this.bounds = null;
        }
    }

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Camera: Camera,
        StaticCamera: StaticCamera
    });

    function GetElement(target) {
        let element;
        if (target) {
            if (typeof target === 'string') {
                element = document.getElementById(target);
            }
            else if (typeof target === 'object' && target.nodeType === 1) {
                element = target;
            }
        }
        if (!element) {
            element = document.body;
        }
        return element;
    }

    function AddToDOM(element, parent) {
        const target = GetElement(parent);
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

    function ParseXML(data) {
        let xml;
        try {
            const parser = new DOMParser();
            xml = parser.parseFromString(data, 'text/xml');
            if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length) {
                return null;
            }
            else {
                return xml;
            }
        }
        catch (error) {
            return null;
        }
    }

    function RemoveFromDOM(element) {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AddToDOM: AddToDOM,
        DOMContentLoaded: DOMContentLoaded,
        GetElement: GetElement,
        ParseXML: ParseXML,
        RemoveFromDOM: RemoveFromDOM
    });

    let _audioElement;
    function CanPlayAudioType(type, audioElement) {
        if (!audioElement) {
            if (!_audioElement) {
                _audioElement = document.createElement('audio');
            }
            audioElement = _audioElement;
        }
        return (audioElement && audioElement.canPlayType(type) !== '');
    }

    function CanPlayM4A(audioElement) {
        return (CanPlayAudioType('audio/x-m4a', audioElement) ||
            CanPlayAudioType('audio/aac', audioElement));
    }

    function CanPlayMP3(audioElement) {
        return CanPlayAudioType('audio/mpeg; codecs="mp3"', audioElement);
    }

    function CanPlayOGG(audioElement) {
        return CanPlayAudioType('audio/ogg; codecs="vorbis"', audioElement);
    }

    function CanPlayOpus(audioElement) {
        return (CanPlayAudioType('audio/ogg; codecs="opus"', audioElement) ||
            CanPlayAudioType('audio/webm; codecs="opus"', audioElement));
    }

    function CanPlayWAV(audioElement) {
        return CanPlayAudioType('audio/wav; codecs="1"', audioElement);
    }

    function CanPlayWebM(audioElement) {
        return CanPlayAudioType('audio/webm; codecs="vorbis"', audioElement);
    }

    function HasAudio() {
        return (window && window.hasOwnProperty('Audio'));
    }

    function HasWebAudio() {
        return (window &&
            (window.hasOwnProperty('AudioContext') || window.hasOwnProperty('webkitAudioContext')));
    }

    function GetAudio() {
        const result = {
            audioData: HasAudio(),
            m4a: false,
            mp3: false,
            ogg: false,
            opus: false,
            wav: false,
            webAudio: HasWebAudio(),
            webm: false
        };
        if (result.audioData) {
            result.m4a = CanPlayM4A();
            result.mp3 = CanPlayMP3();
            result.ogg = CanPlayOGG();
            result.opus = CanPlayOpus();
            result.wav = CanPlayWAV();
            result.webm = CanPlayWebM();
        }
        return result;
    }

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CanPlayAudioType: CanPlayAudioType,
        CanPlayM4A: CanPlayM4A,
        CanPlayMP3: CanPlayMP3,
        CanPlayOGG: CanPlayOGG,
        CanPlayOpus: CanPlayOpus,
        CanPlayWAV: CanPlayWAV,
        CanPlayWebM: CanPlayWebM,
        GetAudio: GetAudio,
        HasAudio: HasAudio,
        HasWebAudio: HasWebAudio
    });

    function IsChrome() {
        const chrome = (/Chrome\/(\d+)/).test(navigator.userAgent);
        const chromeVersion = (chrome) ? parseInt(RegExp.$1, 10) : 0;
        return {
            chrome,
            chromeVersion
        };
    }

    function IsEdge() {
        const edge = (/Edge\/\d+/).test(navigator.userAgent);
        return {
            edge
        };
    }

    function IsFirefox() {
        const firefox = (/Firefox\D+(\d+)/).test(navigator.userAgent);
        const firefoxVersion = (firefox) ? parseInt(RegExp.$1, 10) : 0;
        return {
            firefox,
            firefoxVersion
        };
    }

    function IsMSIE() {
        const ie = (/MSIE (\d+\.\d+);/).test(navigator.userAgent);
        const ieVersion = (ie) ? parseInt(RegExp.$1, 10) : 0;
        return {
            ie,
            ieVersion
        };
    }

    function IsiOS() {
        const ua = navigator.userAgent;
        const result = {
            iOS: false,
            iOSVersion: 0,
            iPhone: false,
            iPad: false
        };
        if ((/iP[ao]d|iPhone/i).test(ua)) {
            const match = (/OS (\d+)/).exec(navigator.appVersion);
            result.iOS = true;
            result.iOSVersion = parseInt(match[0], 10);
            result.iPhone = (ua.toLowerCase().includes('iphone'));
            result.iPad = (ua.toLowerCase().includes('ipad'));
        }
        return result;
    }

    function IsMobileSafari() {
        const { iOS } = IsiOS();
        const mobileSafari = (navigator.userAgent.includes('AppleWebKit') && iOS);
        return {
            mobileSafari
        };
    }

    function IsOpera() {
        const opera = navigator.userAgent.includes('Opera');
        return {
            opera
        };
    }

    function IsWindowsPhone() {
        const ua = navigator.userAgent;
        return ((/Windows Phone/i).test(ua) || (/IEMobile/i).test(ua));
    }

    function IsSafari() {
        const ua = navigator.userAgent;
        const safari = (ua.includes('Safari') && !IsWindowsPhone());
        const safariVersion = ((/Version\/(\d+)\./).test(ua)) ? parseInt(RegExp.$1, 10) : 0;
        return {
            safari,
            safariVersion
        };
    }

    function IsSilk() {
        const silk = navigator.userAgent.includes('Silk');
        return {
            silk
        };
    }

    function IsTrident() {
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
        const { chrome, chromeVersion } = IsChrome();
        const { edge } = IsEdge();
        const { firefox, firefoxVersion } = IsFirefox();
        let { ie, ieVersion } = IsMSIE();
        const { mobileSafari } = IsMobileSafari();
        const { opera } = IsOpera();
        const { safari, safariVersion } = IsSafari();
        const { silk } = IsSilk();
        const { trident, tridentVersion, tridentIEVersion } = IsTrident();
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

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetBrowser: GetBrowser,
        IsChrome: IsChrome,
        IsEdge: IsEdge,
        IsFirefox: IsFirefox,
        IsMobileSafari: IsMobileSafari,
        IsMSIE: IsMSIE,
        IsOpera: IsOpera,
        IsSafari: IsSafari,
        IsSilk: IsSilk,
        IsTrident: IsTrident
    });

    function IsAndroid() {
        return (navigator.userAgent.includes('Android'));
    }

    function IsChromeOS() {
        return (navigator.userAgent.includes('CrOS'));
    }

    function IsCordova() {
        return (window.hasOwnProperty('cordova'));
    }

    function IsCrosswalk() {
        return (navigator.userAgent.includes('Crosswalk'));
    }

    function IsEjecta() {
        return (window.hasOwnProperty('ejecta'));
    }

    function IsKindle() {
        const ua = navigator.userAgent;
        return ((ua.includes('Kindle') || (/\bKF[A-Z][A-Z]+/).test(ua) || (/Silk.*Mobile Safari/).test(ua)));
    }

    function IsLinux() {
        return (navigator.userAgent.includes('Linux'));
    }

    function IsMacOS() {
        const ua = navigator.userAgent;
        return (ua.includes('Mac OS') && !(ua.includes('like Mac OS')));
    }

    function IsNode() {
        return (typeof process !== 'undefined' && typeof process.versions === 'object' && process.versions.hasOwnProperty('node'));
    }

    function IsNodeWebkit() {
        return (IsNode() && !!process.versions.hasOwnProperty('node-webkit'));
    }

    function IsWebApp() {
        return (navigator.hasOwnProperty('standalone'));
    }

    function IsWindows() {
        return (navigator.userAgent.includes('Windows'));
    }

    function GetOS() {
        const ua = navigator.userAgent;
        const { iOS, iOSVersion, iPad, iPhone } = IsiOS();
        const result = {
            android: IsAndroid(),
            chromeOS: IsChromeOS(),
            cordova: IsCordova(),
            crosswalk: IsCrosswalk(),
            desktop: false,
            ejecta: IsEjecta(),
            iOS,
            iOSVersion,
            iPad,
            iPhone,
            kindle: IsKindle(),
            linux: IsLinux(),
            macOS: IsMacOS(),
            node: IsNode(),
            nodeWebkit: IsNodeWebkit(),
            pixelRatio: 1,
            webApp: IsWebApp(),
            windows: IsWindows(),
            windowsPhone: IsWindowsPhone()
        };
        if (result.windowsPhone) {
            result.android = false;
            result.iOS = false;
            result.macOS = false;
            result.windows = true;
        }
        const silk = ua.includes('Silk');
        if (result.windows || result.macOS || (result.linux && !silk) || result.chromeOS) {
            result.desktop = true;
        }
        if (result.windowsPhone || (((/Windows NT/i).test(ua)) && ((/Touch/i).test(ua)))) {
            result.desktop = false;
        }
        return result;
    }

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetOS: GetOS,
        IsAndroid: IsAndroid,
        IsChromeOS: IsChromeOS,
        IsCordova: IsCordova,
        IsCrosswalk: IsCrosswalk,
        IsEjecta: IsEjecta,
        IsiOS: IsiOS,
        IsKindle: IsKindle,
        IsLinux: IsLinux,
        IsMacOS: IsMacOS,
        IsNode: IsNode,
        IsNodeWebkit: IsNodeWebkit,
        IsWebApp: IsWebApp,
        IsWindows: IsWindows,
        IsWindowsPhone: IsWindowsPhone
    });

    let _videoElement;
    function CanPlayVideoType(type, videoElement) {
        if (!videoElement) {
            if (!_videoElement) {
                _videoElement = document.createElement('video');
            }
            videoElement = _videoElement;
        }
        return (videoElement && videoElement.canPlayType(type) !== '');
    }

    function CanPlayH264Video(videoElement) {
        return CanPlayVideoType('video/mp4; codecs="avc1.42E01E"', videoElement);
    }

    function CanPlayHLSVideo(videoElement) {
        return CanPlayVideoType('application/x-mpegURL; codecs="avc1.42E01E"', videoElement);
    }

    function CanPlayOGGVideo(videoElement) {
        return CanPlayVideoType('video/ogg; codecs="theora"', videoElement);
    }

    function CanPlayVP9Video(videoElement) {
        return CanPlayVideoType('video/webm; codecs="vp9"', videoElement);
    }

    function CanPlayWebMVideo(videoElement) {
        return CanPlayVideoType('video/webm; codecs="vp8, vorbis"', videoElement);
    }

    function GetVideo() {
        return {
            h264Video: CanPlayH264Video(),
            hlsVideo: CanPlayHLSVideo(),
            oggVideo: CanPlayOGGVideo(),
            vp9Video: CanPlayVP9Video(),
            webmVideo: CanPlayWebMVideo()
        };
    }

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CanPlayH264Video: CanPlayH264Video,
        CanPlayHLSVideo: CanPlayHLSVideo,
        CanPlayOGGVideo: CanPlayOGGVideo,
        CanPlayVP9Video: CanPlayVP9Video,
        CanPlayVideoType: CanPlayVideoType,
        CanPlayWebMVideo: CanPlayWebMVideo,
        GetVideo: GetVideo
    });

    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Audio: index$3,
        Browser: index$4,
        OS: index$5,
        Video: index$6,
        CanPlayAudioType: CanPlayAudioType,
        CanPlayM4A: CanPlayM4A,
        CanPlayMP3: CanPlayMP3,
        CanPlayOGG: CanPlayOGG,
        CanPlayOpus: CanPlayOpus,
        CanPlayWAV: CanPlayWAV,
        CanPlayWebM: CanPlayWebM,
        GetAudio: GetAudio,
        HasAudio: HasAudio,
        HasWebAudio: HasWebAudio,
        GetBrowser: GetBrowser,
        IsChrome: IsChrome,
        IsEdge: IsEdge,
        IsFirefox: IsFirefox,
        IsMobileSafari: IsMobileSafari,
        IsMSIE: IsMSIE,
        IsOpera: IsOpera,
        IsSafari: IsSafari,
        IsSilk: IsSilk,
        IsTrident: IsTrident,
        GetOS: GetOS,
        IsAndroid: IsAndroid,
        IsChromeOS: IsChromeOS,
        IsCordova: IsCordova,
        IsCrosswalk: IsCrosswalk,
        IsEjecta: IsEjecta,
        IsiOS: IsiOS,
        IsKindle: IsKindle,
        IsLinux: IsLinux,
        IsMacOS: IsMacOS,
        IsNode: IsNode,
        IsNodeWebkit: IsNodeWebkit,
        IsWebApp: IsWebApp,
        IsWindows: IsWindows,
        IsWindowsPhone: IsWindowsPhone,
        CanPlayH264Video: CanPlayH264Video,
        CanPlayHLSVideo: CanPlayHLSVideo,
        CanPlayOGGVideo: CanPlayOGGVideo,
        CanPlayVP9Video: CanPlayVP9Video,
        CanPlayVideoType: CanPlayVideoType,
        CanPlayWebMVideo: CanPlayWebMVideo,
        GetVideo: GetVideo
    });

    function DepthFirstSearch(parent) {
        const stack = [parent];
        const output = [];
        while (stack.length > 0) {
            const node = stack.shift();
            output.push(node);
            const numChildren = node.numChildren;
            if (numChildren > 0) {
                for (let i = numChildren - 1; i >= 0; i--) {
                    stack.unshift(node.children[i]);
                }
            }
        }
        output.shift();
        return output;
    }

    function GetChildIndex(parent, child) {
        return parent.children.indexOf(child);
    }

    function RemoveChildAt(parent, index) {
        const children = parent.children;
        let child;
        if (index >= 0 && index < children.length) {
            const removed = children.splice(index, 1);
            if (removed[0]) {
                child = removed[0];
                child.parent = null;
            }
        }
        return child;
    }

    function RemoveChild(parent, child) {
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex > -1) {
            RemoveChildAt(parent, currentIndex);
        }
        return child;
    }

    const AddedToWorldEvent = 'addedtoworld';

    const DestroyEvent = 'destroy';

    const PostUpdateEvent = 'postupdate';

    const RemovedFromWorldEvent = 'removedfromworld';

    const UpdateEvent = 'update';

    function Emit(emitter, event, ...args) {
        if (emitter.events.size === 0 || !emitter.events.has(event)) {
            return false;
        }
        const listeners = emitter.events.get(event);
        for (const ee of listeners) {
            ee.callback.apply(ee.context, args);
            if (ee.once) {
                listeners.delete(ee);
            }
        }
        if (listeners.size === 0) {
            emitter.events.delete(event);
        }
        return true;
    }

    function SetWorld(world, ...children) {
        children.forEach(child => {
            if (child.world) {
                Emit(child.world, RemovedFromWorldEvent, child, child.world);
                Emit(child, RemovedFromWorldEvent, child, child.world);
            }
            child.world = world;
            Emit(world, AddedToWorldEvent, child, world);
            Emit(child, AddedToWorldEvent, child, world);
        });
        return children;
    }

    function SetParent(parent, ...children) {
        children.forEach(child => {
            if (child.parent) {
                RemoveChild(child.parent, child);
            }
            child.parent = parent;
        });
        const parentWorld = parent.world;
        if (parentWorld) {
            SetWorld(parentWorld, ...DepthFirstSearch(parent));
        }
        return children;
    }

    function AddChild(parent, child) {
        parent.children.push(child);
        SetParent(parent, child);
        child.transform.updateWorld();
        return child;
    }

    function AddChildAt(parent, index, child) {
        const children = parent.children;
        if (index >= 0 && index <= children.length) {
            SetParent(parent, child);
            children.splice(index, 0, child);
            child.transform.updateWorld();
        }
        return child;
    }

    function AddChildren(parent, ...children) {
        children.forEach(child => {
            AddChild(parent, child);
        });
        return children;
    }

    function AddChildrenAt(parent, index, ...children) {
        const parentChildren = parent.children;
        if (index >= 0 && index <= parentChildren.length) {
            children.reverse().forEach(child => {
                children.splice(index, 0, child);
                SetParent(parent, child);
                child.transform.updateWorld();
            });
        }
        return children;
    }

    function AddPosition(x, y, ...children) {
        children.forEach(child => {
            child.x += x;
            child.y += y;
        });
        return children;
    }

    function AddRotation(rotation, ...children) {
        children.forEach(child => {
            child.rotation += rotation;
        });
        return children;
    }

    function AddScale(scaleX, scaleY, ...children) {
        children.forEach(child => {
            child.scaleX += scaleX;
            child.scaleY += scaleY;
        });
        return children;
    }

    function AddSkew(skewX, skewY, ...children) {
        children.forEach(child => {
            child.skewX += skewX;
            child.skewY += skewY;
        });
        return children;
    }

    const DIRTY_CONST = {
        CLEAR: 0,
        TRANSFORM: 1,
        UPDATE: 2,
        CHILD_CACHE: 4,
        POST_RENDER: 8,
        COLORS: 16,
        BOUNDS: 32,
        TEXTURE: 64,
        FRAME: 128,
        ALPHA: 256,
        CHILD: 512,
        DEFAULT: 1 + 2 + 16 + 32,
        USER1: 536870912,
        USER2: 1073741824,
        USER3: 2147483648,
        USER4: 4294967296
    };

    function BringChildToTop(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex !== -1 && currentIndex < parentChildren.length) {
            parentChildren.splice(currentIndex, 1);
            parentChildren.push(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function DepthFirstSearchRecursiveNested(parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const node = parent.children[i];
            const children = [];
            output.push({ node, children });
            if (node.numChildren > 0) {
                DepthFirstSearchRecursiveNested(node, children);
            }
        }
        return output;
    }

    function GetInfo(entry) {
        const legend = (entry.numChildren > 0) ? 'Parent' : 'Child';
        return `${legend} [ type=${entry.type}, name=${entry.name} ]`;
    }
    function LogChildren(entry) {
        console.group(GetInfo(entry.node));
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                LogChildren(child);
            }
            else {
                console.log(GetInfo(child.node));
            }
        });
        console.groupEnd();
    }
    function ConsoleTreeChildren(parent) {
        const entries = DepthFirstSearchRecursiveNested(parent);
        if (parent.world === parent) {
            console.group('World');
        }
        else {
            console.group(GetInfo(parent));
        }
        entries.forEach(entry => {
            if (entry.children.length) {
                LogChildren(entry);
            }
            else {
                console.log(GetInfo(entry.node));
            }
        });
        console.groupEnd();
    }

    function CountMatchingChildren(parent, property, value) {
        const children = parent.children;
        let total = 0;
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                total++;
            }
        });
        return total;
    }

    function DepthFirstSearchRecursive(parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const child = parent.children[i];
            output.push(child);
            if (child.numChildren > 0) {
                DepthFirstSearchRecursive(child, output);
            }
        }
        return output;
    }

    function RemoveChildrenBetween(parent, beginIndex = 0, endIndex) {
        const children = parent.children;
        if (endIndex === undefined) {
            endIndex = children.length;
        }
        const range = endIndex - beginIndex;
        if (range > 0 && range <= endIndex) {
            const removed = children.splice(beginIndex, range);
            removed.forEach(child => {
                child.parent = null;
            });
            return removed;
        }
        else {
            return [];
        }
    }

    function DestroyChildren(parent, beginIndex = 0, endIndex) {
        const removed = RemoveChildrenBetween(parent, beginIndex, endIndex);
        removed.forEach(child => {
            child.destroy();
        });
    }

    function FindChildByName(parent, searchString) {
        const children = DepthFirstSearch(parent);
        const regex = RegExp(searchString);
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (regex.test(child.name)) {
                return child;
            }
        }
    }

    function FindChildrenByName(parent, searchString) {
        const children = DepthFirstSearch(parent);
        const regex = RegExp(searchString);
        const results = [];
        children.forEach(child => {
            if (regex.test(child.name)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetAllChildren(parent, property, value) {
        const children = DepthFirstSearch(parent);
        if (!property) {
            return children;
        }
        const results = [];
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                results.push(child);
            }
        });
        return results;
    }

    function GetChildAt(parent, index) {
        const children = parent.children;
        if (index < 0 || index > children.length) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return children[index];
    }

    function GetChildren(parent, property, value) {
        const children = parent.children;
        if (!property) {
            return [...children];
        }
        const results = [];
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                results.push(child);
            }
        });
        return results;
    }

    function DistanceBetweenPoints(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function GetClosestChild(parent, point) {
        const children = parent.children;
        let closest = null;
        let distance = 0;
        children.forEach(child => {
            const childDistance = DistanceBetweenPoints(point, child.transform.position);
            if (!closest || childDistance < distance) {
                closest = child;
                distance = childDistance;
            }
        });
        return closest;
    }

    function GetFirstChild(parent, property, value) {
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                return child;
            }
        }
    }

    function GetFurthestChild(parent, point) {
        const children = parent.children;
        let furthest = null;
        let distance = 0;
        children.forEach(child => {
            const childDistance = DistanceBetweenPoints(point, child.transform.position);
            if (!furthest || childDistance > distance) {
                furthest = child;
                distance = childDistance;
            }
        });
        return furthest;
    }

    function GetLastChild(parent, property, value) {
        const children = parent.children;
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor && (value === undefined || value === descriptor.value)) {
                return child;
            }
        }
    }

    function GetParents(child) {
        const parents = [];
        while (child.parent) {
            parents.push(child.parent);
            child = child.parent;
        }
        return parents;
    }

    function GetRandomChild(parent, startIndex = 0, length) {
        const children = parent.children;
        if (!length) {
            length = children.length;
        }
        const randomIndex = startIndex + Math.floor(Math.random() * length);
        return children[randomIndex];
    }

    function MoveChildDown(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex > 0) {
            const child2 = parentChildren[currentIndex - 1];
            const index2 = parentChildren.indexOf(child2);
            parentChildren[currentIndex] = child2;
            parentChildren[index2] = child;
            child.setDirty(DIRTY_CONST.TRANSFORM);
            child2.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function MoveChildTo(parent, child, index) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex === -1 || index < 0 || index >= parentChildren.length) {
            throw new Error('Index out of bounds');
        }
        if (currentIndex !== index) {
            parentChildren.splice(currentIndex, 1);
            parentChildren.splice(index, 0, child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function MoveChildUp(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex !== -1 && currentIndex > 0) {
            const child2 = parentChildren[currentIndex + 1];
            const index2 = parentChildren.indexOf(child2);
            parentChildren[currentIndex] = child2;
            parentChildren[index2] = child;
            child.setDirty(DIRTY_CONST.TRANSFORM);
            child2.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function RectangleToRectangle(rectA, rectB) {
        if (rectA.width <= 0 || rectA.height <= 0 || rectB.width <= 0 || rectB.height <= 0) {
            return false;
        }
        return !(rectA.right < rectB.x || rectA.bottom < rectB.y || rectA.x > rectB.right || rectA.y > rectB.bottom);
    }

    function Overlap(source, ...targets) {
        const sourceBounds = source.bounds.get();
        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            const targetBounds = target.bounds.get();
            if (RectangleToRectangle(sourceBounds, targetBounds)) {
                return true;
            }
        }
        return false;
    }

    function RemoveChildren(parent, ...children) {
        children.forEach(child => {
            RemoveChild(parent, child);
        });
        return children;
    }

    function RemoveChildrenAt(parent, ...index) {
        const removed = [];
        index.sort((a, b) => a - b);
        index.reverse().forEach(i => {
            const child = RemoveChildAt(parent, i);
            if (child) {
                removed.push(child);
            }
        });
        return removed;
    }

    function ReparentChildren(parent, newParent, beginIndex = 0, endIndex) {
        const moved = RemoveChildrenBetween(parent, beginIndex, endIndex);
        SetParent(newParent, ...moved);
        moved.forEach(child => {
            child.transform.updateWorld();
        });
        return moved;
    }

    function RotateChildrenLeft(parent, total = 1) {
        const parentChildren = parent.children;
        let child = null;
        for (let i = 0; i < total; i++) {
            child = parentChildren.shift();
            parentChildren.push(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function RotateChildrenRight(parent, total = 1) {
        const parentChildren = parent.children;
        let child = null;
        for (let i = 0; i < total; i++) {
            child = parentChildren.pop();
            parentChildren.unshift(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function SendChildToBack(parent, child) {
        const parentChildren = parent.children;
        const currentIndex = GetChildIndex(parent, child);
        if (currentIndex !== -1 && currentIndex > 0) {
            parentChildren.splice(currentIndex, 1);
            parentChildren.unshift(child);
            child.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return child;
    }

    function SetBounds(x, y, width, height, ...children) {
        children.forEach(child => {
            child.bounds.set(x, y, width, height);
        });
        return children;
    }

    function SetChildrenValue(parent, property, value) {
        const children = DepthFirstSearch(parent);
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor) {
                descriptor.set(value);
            }
        });
        return children;
    }

    function SetName(name, ...children) {
        children.forEach(child => {
            child.name = name;
        });
        return children;
    }

    function SetOrigin(originX, originY, ...children) {
        children.forEach(child => {
            child.setOrigin(originX, originY);
        });
        return children;
    }

    function SetPosition(x, y, ...children) {
        children.forEach(child => {
            child.setPosition(x, y);
        });
        return children;
    }

    function SetRotation(rotation, ...children) {
        children.forEach(child => {
            child.rotation = rotation;
        });
        return children;
    }

    function SetScale(scaleX, scaleY, ...children) {
        children.forEach(child => {
            child.setScale(scaleX, scaleY);
        });
        return children;
    }

    function SetSize(width, height, ...children) {
        children.forEach(child => {
            child.setSize(width, height);
        });
        return children;
    }

    function SetSkew(skewX, skewY, ...children) {
        children.forEach(child => {
            child.setSkew(skewX, skewY);
        });
        return children;
    }

    function SetType(type, ...children) {
        children.forEach(child => {
            child.type = type;
        });
        return children;
    }

    function SetValue(property, value, ...children) {
        children.forEach(child => {
            const descriptor = Object.getOwnPropertyDescriptor(child, property);
            if (descriptor) {
                descriptor.set(value);
            }
        });
        return children;
    }

    function SetVisible(visible, ...children) {
        children.forEach(child => {
            child.visible = visible;
        });
        return children;
    }

    function ShuffleChildren(parent) {
        const children = parent.children;
        for (let i = children.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = children[i];
            children[i] = children[j];
            children[j] = temp;
            temp.setDirty(DIRTY_CONST.TRANSFORM);
        }
        return children;
    }

    function SwapChildren(child1, child2) {
        if (child1.parent === child2.parent) {
            const children = child1.parent.children;
            const index1 = GetChildIndex(child1.parent, child1);
            const index2 = GetChildIndex(child2.parent, child2);
            if (index1 !== index2) {
                children[index1] = child2;
                children[index2] = child1;
            }
        }
    }

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AddChild: AddChild,
        AddChildAt: AddChildAt,
        AddChildren: AddChildren,
        AddChildrenAt: AddChildrenAt,
        AddPosition: AddPosition,
        AddRotation: AddRotation,
        AddScale: AddScale,
        AddSkew: AddSkew,
        BringChildToTop: BringChildToTop,
        ConsoleTreeChildren: ConsoleTreeChildren,
        CountMatchingChildren: CountMatchingChildren,
        DepthFirstSearch: DepthFirstSearch,
        DepthFirstSearchRecursive: DepthFirstSearchRecursive,
        DepthFirstSearchRecursiveNested: DepthFirstSearchRecursiveNested,
        DestroyChildren: DestroyChildren,
        FindChildByName: FindChildByName,
        FindChildrenByName: FindChildrenByName,
        GetAllChildren: GetAllChildren,
        GetChildAt: GetChildAt,
        GetChildIndex: GetChildIndex,
        GetChildren: GetChildren,
        GetClosestChild: GetClosestChild,
        GetFirstChild: GetFirstChild,
        GetFurthestChild: GetFurthestChild,
        GetLastChild: GetLastChild,
        GetParents: GetParents,
        GetRandomChild: GetRandomChild,
        MoveChildDown: MoveChildDown,
        MoveChildTo: MoveChildTo,
        MoveChildUp: MoveChildUp,
        Overlap: Overlap,
        RemoveChild: RemoveChild,
        RemoveChildAt: RemoveChildAt,
        RemoveChildren: RemoveChildren,
        RemoveChildrenAt: RemoveChildrenAt,
        RemoveChildrenBetween: RemoveChildrenBetween,
        ReparentChildren: ReparentChildren,
        RotateChildrenLeft: RotateChildrenLeft,
        RotateChildrenRight: RotateChildrenRight,
        SendChildToBack: SendChildToBack,
        SetBounds: SetBounds,
        SetChildrenValue: SetChildrenValue,
        SetName: SetName,
        SetOrigin: SetOrigin,
        SetParent: SetParent,
        SetPosition: SetPosition,
        SetRotation: SetRotation,
        SetScale: SetScale,
        SetSize: SetSize,
        SetSkew: SetSkew,
        SetType: SetType,
        SetValue: SetValue,
        SetVisible: SetVisible,
        SetWorld: SetWorld,
        ShuffleChildren: ShuffleChildren,
        SwapChildren: SwapChildren
    });

    function ClearEvent(emitter, event) {
        emitter.events.delete(event);
        return emitter;
    }

    class EventEmitter {
        constructor() {
            this.events = new Map();
        }
    }

    class EventInstance {
        constructor(callback, context, once = false) {
            this.callback = callback;
            this.context = context;
            this.once = once;
        }
    }

    function GetEventNames(emitter) {
        return [...emitter.events.keys()];
    }

    function GetListenerCount(emitter, event) {
        const listeners = emitter.events.get(event);
        return (listeners) ? listeners.size : 0;
    }

    function GetListeners(emitter, event) {
        const out = [];
        const listeners = emitter.events.get(event);
        listeners.forEach(listener => {
            out.push(listener.callback);
        });
        return out;
    }

    function Off(emitter, event, callback, context, once) {
        const events = emitter.events;
        const listeners = events.get(event);
        if (!callback) {
            events.delete(event);
        }
        else if (callback instanceof EventInstance) {
            listeners.delete(callback);
        }
        else {
            const hasContext = !context;
            const hasOnce = (once !== undefined);
            for (const listener of listeners) {
                if ((listener.callback === callback) &&
                    (hasContext && listener.context === context) &&
                    (hasOnce && listener.once === once)) {
                    listeners.delete(listener);
                }
            }
        }
        if (listeners.size === 0) {
            events.delete(event);
        }
        return emitter;
    }

    function On(emitter, event, callback, context = emitter, once = false) {
        if (typeof callback !== 'function') {
            throw new TypeError('Listener not a function');
        }
        const listener = new EventInstance(callback, context, once);
        const listeners = emitter.events.get(event);
        if (!listeners) {
            emitter.events.set(event, new Set([listener]));
        }
        else {
            listeners.add(listener);
        }
        return listener;
    }

    function Once(emitter, event, callback, context = emitter) {
        return On(emitter, event, callback, context, true);
    }

    function RemoveAllListeners(emitter, event) {
        if (!event) {
            emitter.events.clear();
        }
        else {
            emitter.events.delete(event);
        }
    }

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ClearEvent: ClearEvent,
        Emit: Emit,
        EventEmitter: EventEmitter,
        EventInstance: EventInstance,
        GetEventNames: GetEventNames,
        GetListenerCount: GetListenerCount,
        GetListeners: GetListeners,
        Off: Off,
        On: On,
        Once: Once,
        RemoveAllListeners: RemoveAllListeners
    });

    function GetVertices(transform) {
        const { a, b, c, d, tx, ty } = transform.world;
        const { x, y, right, bottom } = transform.extent;
        const x0 = (x * a) + (y * c) + tx;
        const y0 = (x * b) + (y * d) + ty;
        const x1 = (x * a) + (bottom * c) + tx;
        const y1 = (x * b) + (bottom * d) + ty;
        const x2 = (right * a) + (bottom * c) + tx;
        const y2 = (right * b) + (bottom * d) + ty;
        const x3 = (right * a) + (y * c) + tx;
        const y3 = (right * b) + (y * d) + ty;
        return { x0, y0, x1, y1, x2, y2, x3, y3 };
    }

    class BoundsComponent {
        constructor(entity) {
            this.fixed = false;
            this.includeChildren = true;
            this.visibleOnly = true;
            this.entity = entity;
            this.area = new Rectangle();
        }
        set(x, y, width, height) {
            this.area.set(x, y, width, height);
        }
        get() {
            if (this.entity.isDirty(DIRTY_CONST.BOUNDS) && !this.fixed) {
                this.update();
            }
            return this.area;
        }
        updateLocal() {
            const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVertices(this.entity.transform);
            const x = Math.min(x0, x1, x2, x3);
            const y = Math.min(y0, y1, y2, y3);
            const right = Math.max(x0, x1, x2, x3);
            const bottom = Math.max(y0, y1, y2, y3);
            return this.area.set(x, y, right - x, bottom - y);
        }
        update() {
            const bounds = this.updateLocal();
            this.entity.clearDirty(DIRTY_CONST.BOUNDS);
            if (!this.includeChildren || !this.entity.numChildren) {
                return bounds;
            }
            const visibleOnly = this.visibleOnly;
            const children = this.entity.children;
            let x = bounds.x;
            let y = bounds.y;
            let right = bounds.right;
            let bottom = bounds.bottom;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (!child || (visibleOnly && !child.visible)) {
                    continue;
                }
                const childBounds = child.bounds.get();
                if (childBounds.x < x) {
                    x = childBounds.x;
                }
                if (childBounds.y < y) {
                    y = childBounds.y;
                }
                if (childBounds.right > right) {
                    right = childBounds.right;
                }
                if (childBounds.bottom > bottom) {
                    bottom = childBounds.bottom;
                }
            }
            return bounds.set(x, y, right - x, bottom - y);
        }
        destroy() {
            this.entity = null;
            this.area = null;
        }
    }

    class InputComponent {
        constructor(entity) {
            this.enabled = false;
            this.enabledChildren = true;
            this.entity = entity;
        }
        destroy() {
            this.entity = null;
            this.hitArea = null;
        }
    }

    class Vec2 {
        constructor(x = 0, y = 0) {
            this.set(x, y);
        }
        set(x = 0, y = 0) {
            this.x = x;
            this.y = y;
            return this;
        }
        getArray() {
            return [this.x, this.y];
        }
        fromArray(src) {
            return this.set(src[0], src[1]);
        }
        toString() {
            return `[x=${this.x}, y=${this.y}]`;
        }
    }

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Vec2: Vec2,
        Vec2Callback: Vec2Callback
    });

    let originX = 0.5;
    let originY = 0.5;

    function DegToRad(degrees) {
        return degrees * MATH_CONST.DEG_TO_RAD;
    }

    function Between(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function UpdateLocalTransform(transform) {
        const local = transform.local;
        const x = transform.position.x;
        const y = transform.position.y;
        const rotation = transform.rotation;
        const scaleX = transform.scale.x;
        const scaleY = transform.scale.y;
        const skewX = transform.skew.x;
        const skewY = transform.skew.y;
        local.set(Math.cos(rotation + skewY) * scaleX, Math.sin(rotation + skewY) * scaleX, -Math.sin(rotation - skewX) * scaleY, Math.cos(rotation - skewX) * scaleY, x, y);
    }

    function Copy(src, target) {
        return target.set(src.a, src.b, src.c, src.d, src.tx, src.ty);
    }

    function UpdateWorldTransform(gameObject) {
        const parent = gameObject.parent;
        const transform = gameObject.transform;
        const lt = transform.local;
        const wt = transform.world;
        if (!parent) {
            Copy(lt, wt);
        }
        else if (transform.passthru) {
            Copy(parent.transform.world, wt);
        }
        else {
            const { a, b, c, d, tx, ty } = lt;
            const { a: pa, b: pb, c: pc, d: pd, tx: ptx, ty: pty } = parent.transform.world;
            wt.set(a * pa + b * pc, a * pb + b * pd, c * pa + d * pc, c * pb + d * pd, tx * pa + ty * pc + ptx, tx * pb + ty * pd + pty);
        }
    }

    class TransformComponent {
        constructor(entity, x = 0, y = 0) {
            this.passthru = false;
            this._rotation = 0;
            this.entity = entity;
            this.local = new Matrix2D();
            this.world = new Matrix2D();
            this.position = new Vec2Callback(() => this.update(), x, y);
            this.scale = new Vec2Callback(() => this.update(), 1, 1, true);
            this.skew = new Vec2Callback(() => this.update(), 0, 0, true);
            this.origin = new Vec2Callback(() => this.updateExtent(), originX, originY);
            this.extent = new Rectangle();
        }
        update() {
            this.updateLocal();
            this.updateWorld();
        }
        updateLocal() {
            this.entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
            UpdateLocalTransform(this);
        }
        updateWorld() {
            const entity = this.entity;
            entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
            UpdateWorldTransform(entity);
            if (entity.numChildren) {
                this.updateChildren();
            }
        }
        updateChildren() {
            const children = this.entity.children;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                child.transform.updateWorld();
            }
        }
        globalToLocal(x, y, out = new Vec2()) {
            const { a, b, c, d, tx, ty } = this.world;
            const id = 1 / ((a * d) + (c * -b));
            out.x = (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id);
            out.y = (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id);
            return out;
        }
        localToGlobal(x, y, out = new Vec2()) {
            const { a, b, c, d, tx, ty } = this.world;
            out.x = (a * x) + (c * y) + tx;
            out.y = (b * x) + (d * y) + ty;
            return out;
        }
        setExtent(x, y, width, height) {
            this.extent.set(x, y, width, height);
            this.entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
        }
        updateExtent(width, height) {
            const extent = this.extent;
            const entity = this.entity;
            if (width !== undefined) {
                extent.width = width;
            }
            if (height !== undefined) {
                extent.height = height;
            }
            extent.x = -(this.origin.x) * extent.width;
            extent.y = -(this.origin.y) * extent.height;
            entity.setDirty(DIRTY_CONST.TRANSFORM, DIRTY_CONST.BOUNDS);
        }
        set rotation(value) {
            if (value !== this._rotation) {
                this._rotation = value;
                this.update();
            }
        }
        get rotation() {
            return this._rotation;
        }
        destroy() {
            this.position.destroy();
            this.scale.destroy();
            this.skew.destroy();
            this.origin.destroy();
            this.entity = null;
            this.local = null;
            this.world = null;
            this.position = null;
            this.scale = null;
            this.skew = null;
            this.origin = null;
            this.extent = null;
        }
    }

    var index$b = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BoundsComponent: BoundsComponent,
        InputComponent: InputComponent,
        GetVertices: GetVertices,
        TransformComponent: TransformComponent,
        UpdateLocalTransform: UpdateLocalTransform,
        UpdateWorldTransform: UpdateWorldTransform
    });

    function BatchTexturedQuad(sprite, renderer) {
        const texture = sprite.texture;
        const shader = renderer.shaders.current;
        const buffer = shader.buffer;
        const binding = texture.binding;
        if (shader.count === buffer.batchSize) {
            renderer.flush();
        }
        const data = sprite.vertexData;
        renderer.textures.request(texture);
        const textureIndex = binding.index;
        data[4] = textureIndex;
        data[10] = textureIndex;
        data[16] = textureIndex;
        data[22] = textureIndex;
        const offset = shader.count * buffer.quadElementSize;
        buffer.vertexViewF32.set(data, offset);
        const color = sprite.vertexColor;
        const U32 = buffer.vertexViewU32;
        U32[offset + 5] = color[0];
        U32[offset + 11] = color[2];
        U32[offset + 17] = color[3];
        U32[offset + 23] = color[1];
        shader.count++;
    }

    class GameObject {
        constructor(x = 0, y = 0) {
            this.type = 'GameObject';
            this.name = '';
            this.willUpdate = true;
            this.willUpdateChildren = true;
            this.willRender = true;
            this.willRenderChildren = true;
            this.willCacheChildren = false;
            this.dirty = 0;
            this.dirtyFrame = 0;
            this.visible = true;
            this.children = [];
            this.events = new Map();
            this.transform = new TransformComponent(this, x, y);
            this.bounds = new BoundsComponent(this);
            this.input = new InputComponent(this);
            this.dirty = DIRTY_CONST.DEFAULT;
            this.transform.update();
        }
        isRenderable() {
            return (this.visible && this.willRender);
        }
        isDirty(flag) {
            return (this.dirty & flag) !== 0;
        }
        clearDirty(flag) {
            if (this.isDirty(flag)) {
                this.dirty ^= flag;
            }
            return this;
        }
        setDirty(flag, flag2) {
            if (!this.isDirty(flag)) {
                this.dirty ^= flag;
                this.dirtyFrame = GameInstance.getFrame();
            }
            if (!this.isDirty(flag2)) {
                this.dirty ^= flag2;
            }
            return this;
        }
        update(delta, time) {
            if (this.willUpdateChildren) {
                const children = this.children;
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    if (child && child.willUpdate) {
                        child.update(delta, time);
                    }
                }
            }
            this.postUpdate(delta, time);
        }
        postUpdate(delta, time) {
        }
        renderGL(renderer) {
        }
        renderCanvas(renderer) {
        }
        postRenderGL(renderer) {
        }
        postRenderCanvas(renderer) {
        }
        get numChildren() {
            return this.children.length;
        }
        destroy(reparentChildren) {
            if (reparentChildren) {
                ReparentChildren(this, reparentChildren);
            }
            else {
                DestroyChildren(this);
            }
            Emit(this, DestroyEvent, this);
            this.transform.destroy();
            this.bounds.destroy();
            this.input.destroy();
            this.events.clear();
            this.world = null;
            this.parent = null;
            this.children = null;
        }
    }

    class Container extends GameObject {
        constructor(x = 0, y = 0) {
            super(x, y);
            this._alpha = 1;
            this.type = 'Container';
        }
        setSize(width, height = width) {
            this.transform.updateExtent(width, height);
            return this;
        }
        setPosition(x, y) {
            this.transform.position.set(x, y);
            return this;
        }
        setOrigin(x, y = x) {
            this.transform.origin.set(x, y);
            return this;
        }
        setSkew(x, y = x) {
            this.transform.skew.set(x, y);
            return this;
        }
        setScale(x, y = x) {
            this.transform.scale.set(x, y);
            return this;
        }
        setRotation(value) {
            this.transform.rotation = value;
            return this;
        }
        set width(value) {
            this.transform.updateExtent(value);
        }
        get width() {
            return this.transform.extent.width;
        }
        set height(value) {
            this.transform.updateExtent(undefined, value);
        }
        get height() {
            return this.transform.extent.height;
        }
        set x(value) {
            this.transform.position.x = value;
        }
        get x() {
            return this.transform.position.x;
        }
        set y(value) {
            this.transform.position.y = value;
        }
        get y() {
            return this.transform.position.y;
        }
        set originX(value) {
            this.transform.origin.x = value;
        }
        get originX() {
            return this.transform.origin.x;
        }
        set originY(value) {
            this.transform.origin.y = value;
        }
        get originY() {
            return this.transform.origin.y;
        }
        set skewX(value) {
            this.transform.skew.x = value;
        }
        get skewX() {
            return this.transform.skew.x;
        }
        set skewY(value) {
            this.transform.skew.y = value;
        }
        get skewY() {
            return this.transform.skew.y;
        }
        set scaleX(value) {
            this.transform.scale.x = value;
        }
        get scaleX() {
            return this.transform.scale.x;
        }
        set scaleY(value) {
            this.transform.scale.y = value;
        }
        get scaleY() {
            return this.transform.scale.y;
        }
        set rotation(value) {
            this.transform.rotation = value;
        }
        get rotation() {
            return this.transform.rotation;
        }
        get alpha() {
            return this._alpha;
        }
        set alpha(value) {
            if (value !== this._alpha) {
                this._alpha = value;
                this.setDirty(DIRTY_CONST.TRANSFORM);
            }
        }
    }

    function DrawTexturedQuad(sprite, renderer) {
        const frame = sprite.frame;
        if (!frame) {
            return;
        }
        const ctx = renderer.ctx;
        const transform = sprite.transform;
        const { a, b, c, d, tx, ty } = transform.world;
        const { x, y } = transform.extent;
        ctx.save();
        ctx.setTransform(a, b, c, d, tx, ty);
        ctx.globalAlpha = sprite.alpha;
        ctx.drawImage(frame.texture.image, frame.x, frame.y, frame.width, frame.height, x, y, frame.width, frame.height);
        ctx.restore();
    }

    function PackColor(rgb, alpha) {
        const ua = ((alpha * 255) | 0) & 0xFF;
        return ((ua << 24) | rgb) >>> 0;
    }

    function PackColors(sprite) {
        const alpha = sprite.vertexAlpha;
        const tint = sprite.vertexTint;
        const color = sprite.vertexColor;
        color[0] = PackColor(tint[0], alpha[0]);
        color[1] = PackColor(tint[1], alpha[1]);
        color[2] = PackColor(tint[2], alpha[2]);
        color[3] = PackColor(tint[3], alpha[3]);
        return sprite;
    }

    function SetFrame(texture, key, ...children) {
        const frame = texture.getFrame(key);
        const { u0, u1, v0, v1, pivot } = frame;
        children.forEach(child => {
            if (!child || frame === child.frame) {
                return;
            }
            child.frame = frame;
            if (pivot) {
                child.setOrigin(pivot.x, pivot.y);
            }
            child.frame.setExtent(child);
            child.hasTexture = true;
            const data = child.vertexData;
            data[2] = u0;
            data[3] = v0;
            data[8] = u0;
            data[9] = v1;
            data[14] = u1;
            data[15] = v1;
            data[20] = u1;
            data[21] = v0;
        });
        return children;
    }

    const queue = [];
    const BindingQueue = {
        add: (texture) => {
            queue.push(texture);
        },
        get: () => {
            return queue;
        },
        clear: () => {
            queue.length = 0;
        }
    };

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
        getExtent(originX, originY) {
            const sourceSizeWidth = this.sourceSizeWidth;
            const sourceSizeHeight = this.sourceSizeHeight;
            let left;
            let right;
            let top;
            let bottom;
            if (this.trimmed) {
                left = this.spriteSourceSizeX - (originX * sourceSizeWidth);
                right = left + this.spriteSourceSizeWidth;
                top = this.spriteSourceSizeY - (originY * sourceSizeHeight);
                bottom = top + this.spriteSourceSizeHeight;
            }
            else {
                left = -originX * sourceSizeWidth;
                right = left + sourceSizeWidth;
                top = -originY * sourceSizeHeight;
                bottom = top + sourceSizeHeight;
            }
            return { left, right, top, bottom };
        }
        setExtent(child) {
            const transform = child.transform;
            const originX = transform.origin.x;
            const originY = transform.origin.y;
            const sourceSizeWidth = this.sourceSizeWidth;
            const sourceSizeHeight = this.sourceSizeHeight;
            let x;
            let y;
            let width;
            let height;
            if (this.trimmed) {
                x = this.spriteSourceSizeX - (originX * sourceSizeWidth);
                y = this.spriteSourceSizeY - (originY * sourceSizeHeight);
                width = this.spriteSourceSizeWidth;
                height = this.spriteSourceSizeHeight;
            }
            else {
                x = -originX * sourceSizeWidth;
                y = -originY * sourceSizeHeight;
                width = sourceSizeWidth;
                height = sourceSizeHeight;
            }
            transform.setExtent(x, y, width, height);
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

    class Texture {
        constructor(image, width, height) {
            this.key = '';
            if (image) {
                width = image.width;
                height = image.height;
            }
            this.image = image;
            this.width = width;
            this.height = height;
            this.frames = new Map();
            this.data = {};
            this.addFrame('__BASE', 0, 0, width, height);
            BindingQueue.add(this);
        }
        addFrame(key, x, y, width, height) {
            if (this.frames.has(key)) {
                return null;
            }
            const frame = new Frame(this, key, x, y, width, height);
            this.frames.set(key, frame);
            if (!this.firstFrame || this.firstFrame.key === '__BASE') {
                this.firstFrame = frame;
            }
            return frame;
        }
        getFrame(key) {
            if (!key) {
                return this.firstFrame;
            }
            if (key instanceof Frame) {
                key = key.key;
            }
            let frame = this.frames.get(key);
            if (!frame) {
                console.warn(`Frame missing: ${key}`);
                frame = this.firstFrame;
            }
            return frame;
        }
        setSize(width, height) {
            this.width = width;
            this.height = height;
            const frame = this.frames.get('__BASE');
            frame.setSize(width, height);
        }
        destroy() {
            if (this.binding) {
                this.binding.destroy();
            }
            this.frames.clear();
            this.data = null;
            this.image = null;
            this.firstFrame = null;
        }
    }

    let instance$1;
    const TextureManagerInstance = {
        get: () => {
            return instance$1;
        },
        set: (manager) => {
            instance$1 = manager;
        }
    };

    function SetTexture(key, frame, ...children) {
        if (!key) {
            children.forEach(child => {
                child.texture = null;
                child.frame = null;
                child.hasTexture = false;
            });
        }
        else {
            let texture;
            if (key instanceof Texture) {
                texture = key;
            }
            else {
                texture = TextureManagerInstance.get().get(key);
            }
            if (!texture) {
                console.warn(`Invalid Texture key: ${key}`);
            }
            else {
                children.forEach(child => {
                    child.texture = texture;
                });
                SetFrame(texture, frame, ...children);
            }
        }
        return children;
    }

    function UpdateVertices(sprite) {
        const data = sprite.vertexData;
        const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVertices(sprite.transform);
        data[0] = x0;
        data[1] = y0;
        data[6] = x1;
        data[7] = y1;
        data[12] = x2;
        data[13] = y2;
        data[18] = x3;
        data[19] = y3;
        return sprite;
    }

    class Sprite extends Container {
        constructor(x, y, texture, frame) {
            super(x, y);
            this.hasTexture = false;
            this._tint = 0xffffff;
            this.type = 'Sprite';
            this.vertexData = new Float32Array(24).fill(0);
            this.vertexColor = new Uint32Array(4).fill(4294967295);
            this.vertexAlpha = new Float32Array(4).fill(1);
            this.vertexTint = new Uint32Array(4).fill(0xffffff);
            this.setTexture(texture, frame);
        }
        setTexture(key, frame) {
            SetTexture(key, frame, this);
            return this;
        }
        setFrame(key) {
            SetFrame(this.texture, key, this);
            return this;
        }
        isRenderable() {
            return (this.visible && this.willRender && this.hasTexture && this.alpha > 0);
        }
        preRender() {
            if (this.isDirty(DIRTY_CONST.COLORS)) {
                PackColors(this);
                this.clearDirty(DIRTY_CONST.COLORS);
            }
            if (this.isDirty(DIRTY_CONST.TRANSFORM)) {
                UpdateVertices(this);
                this.clearDirty(DIRTY_CONST.TRANSFORM);
            }
        }
        renderGL(renderer) {
            this.preRender();
            BatchTexturedQuad(this, renderer);
        }
        renderCanvas(renderer) {
            this.preRender();
            DrawTexturedQuad(this, renderer);
        }
        get alpha() {
            return this._alpha;
        }
        set alpha(value) {
            if (value !== this._alpha) {
                this._alpha = value;
                const vertexAlpha = this.vertexAlpha;
                vertexAlpha[0] = value;
                vertexAlpha[1] = value;
                vertexAlpha[2] = value;
                vertexAlpha[3] = value;
                this.setDirty(DIRTY_CONST.ALPHA);
            }
        }
        get tint() {
            return this._tint;
        }
        set tint(value) {
            if (value !== this._tint) {
                this._tint = value;
                const vertexTint = this.vertexTint;
                vertexTint[0] = value;
                vertexTint[1] = value;
                vertexTint[2] = value;
                vertexTint[3] = value;
                this.setDirty(DIRTY_CONST.COLORS);
            }
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
    }

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

    function BatchSingleQuad(renderer, x, y, width, height, u0, v0, u1, v1, textureIndex = 0, packedColor = 4294967295) {
        const shader = renderer.shaders.current;
        const buffer = shader.buffer;
        const F32 = buffer.vertexViewF32;
        const U32 = buffer.vertexViewU32;
        const offset = shader.count * buffer.quadElementSize;
        F32[offset + 0] = x;
        F32[offset + 1] = y;
        F32[offset + 2] = u0;
        F32[offset + 3] = v1;
        F32[offset + 4] = textureIndex;
        U32[offset + 5] = packedColor;
        F32[offset + 6] = x;
        F32[offset + 7] = y + height;
        F32[offset + 8] = u0;
        F32[offset + 9] = v0;
        F32[offset + 10] = textureIndex;
        U32[offset + 11] = packedColor;
        F32[offset + 12] = x + width;
        F32[offset + 13] = y + height;
        F32[offset + 14] = u1;
        F32[offset + 15] = v0;
        F32[offset + 16] = textureIndex;
        U32[offset + 17] = packedColor;
        F32[offset + 18] = x + width;
        F32[offset + 19] = y;
        F32[offset + 20] = u1;
        F32[offset + 21] = v1;
        F32[offset + 22] = textureIndex;
        U32[offset + 23] = packedColor;
        shader.count++;
    }

    function DrawTexturedQuad$1(renderer, x, y, width, height, u0, v0, u1, v1, textureIndex = 0, packedColor = 4294967295) {
        renderer.shaders.setDefault(textureIndex);
        BatchSingleQuad(renderer, x, y, width, height, u0, v0, u1, v1, textureIndex, packedColor);
        renderer.shaders.popAndRebind();
    }

    let bgColor = 0;
    function GetBackgroundColor() {
        return bgColor;
    }

    let title = 'Phaser';
    let url = 'https://phaser4.io';
    let color = '#fff';
    let background = 'linear-gradient(#3e0081 40%, #00bcc3)';
    function GetBanner() {
        {
            const game = GameInstance.get();
            const version =  ' v' + game.VERSION ;
            console.log(`%c${title}${version}%c ${url}`, `padding: 4px 16px; color: ${color}; background: ${background}`, '');
        }
    }

    let _width = 800;
    let _height = 600;
    let _resolution = 1;
    function GetWidth() {
        return _width;
    }
    function GetHeight() {
        return _height;
    }
    function GetResolution() {
        return _resolution;
    }

    let instance$2;
    function GetRenderer() {
        return instance$2;
    }

    let maxTextures = 0;
    function SetMaxTextures(max) {
        maxTextures = max;
    }
    function GetMaxTextures() {
        return maxTextures;
    }

    let _scenes = [];
    function GetScenes() {
        return _scenes;
    }

    let _contextAttributes = {
        alpha: false,
        antialias: false,
        depth: false,
        premultipliedAlpha: false
    };
    function GetWebGLContext() {
        return _contextAttributes;
    }

    class FBOSystem {
        constructor(renderer) {
            this.stack = [];
            this.current = null;
            this.renderer = renderer;
        }
        reset() {
            this.stack = [];
            this.current = null;
            const renderer = this.renderer;
            const gl = renderer.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, renderer.width, renderer.height);
        }
        add(framebuffer, clear = true, width = 0, height = 0) {
            this.stack.push({ framebuffer, width, height });
            this.set(framebuffer, clear, width, height);
        }
        set(framebuffer, clear = true, width = 0, height = 0) {
            const renderer = this.renderer;
            const gl = renderer.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            if (clear) {
                gl.clearColor(0, 0, 0, 0);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
            if (width > 0) {
                gl.viewport(0, 0, width, height);
            }
            this.current = framebuffer;
        }
        pop() {
            this.stack.pop();
            const len = this.stack.length;
            if (len > 0) {
                const entry = this.stack[len - 1];
                this.set(entry.framebuffer, false, entry.width, entry.height);
            }
            else {
                this.reset();
            }
        }
        rebind() {
            const gl = this.renderer.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.current);
        }
        destroy() {
            this.stack = [];
        }
    }

    let gl;
    const GL = {
        get: () => {
            return gl;
        },
        set: (context) => {
            gl = context;
        }
    };

    function GetRGBArray(color, output = []) {
        const r = color >> 16 & 0xFF;
        const g = color >> 8 & 0xFF;
        const b = color & 0xFF;
        const a = (color > 16777215) ? color >>> 24 : 255;
        output[0] = r / 255;
        output[1] = g / 255;
        output[2] = b / 255;
        output[3] = a / 255;
        return output;
    }

    function ExactEquals(a, b) {
        return (a.a === b.a &&
            a.b === b.b &&
            a.c === b.c &&
            a.d === b.d &&
            a.tx === b.tx &&
            a.ty === b.ty);
    }

    function CreateFramebuffer(texture, attachment) {
        const gl = GL.get();
        if (!attachment) {
            attachment = gl.COLOR_ATTACHMENT0;
        }
        const framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, 0);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return framebuffer;
    }

    function CreateGLTexture(binding) {
        const gl = GL.get();
        if (!gl) {
            return;
        }
        const { parent, flipY, unpackPremultiplyAlpha, minFilter, magFilter, wrapS, wrapT, generateMipmap, isPOT } = binding;
        const source = parent.image;
        let width = parent.width;
        let height = parent.height;
        const glTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, unpackPremultiplyAlpha);
        if (source) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
            width = source.width;
            height = source.height;
        }
        else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
        if (generateMipmap && isPOT) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        binding.texture = glTexture;
        return glTexture;
    }

    function DeleteFramebuffer(framebuffer) {
        const gl = GL.get();
        if (gl && gl.isFramebuffer(framebuffer)) {
            gl.deleteFramebuffer(framebuffer);
        }
    }

    function DeleteGLTexture(texture) {
        const gl = GL.get();
        if (!gl) {
            return;
        }
        if (gl.isTexture(texture)) {
            gl.deleteTexture(texture);
        }
    }

    function IsSizePowerOfTwo(width, height) {
        if (width < 1 || height < 1) {
            return false;
        }
        return ((width & (width - 1)) === 0) && ((height & (height - 1)) === 0);
    }

    function SetGLTextureFilterMode(texture, linear = true) {
        const gl = GL.get();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        const mode = (linear) ? gl.LINEAR : gl.NEAREST;
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mode);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mode);
    }

    function UpdateGLTexture(binding) {
        const gl = GL.get();
        const source = binding.parent.image;
        const width = source.width;
        const height = source.height;
        if (width > 0 && height > 0) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, binding.flipY);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
        }
        return binding.texture;
    }

    class GLTextureBinding {
        constructor(parent, config = {}) {
            this.index = 0;
            this.indexCounter = -1;
            this.dirtyIndex = true;
            this.unpackPremultiplyAlpha = true;
            this.flipY = false;
            this.isPOT = false;
            this.generateMipmap = false;
            const gl = GL.get();
            this.parent = parent;
            this.isPOT = IsSizePowerOfTwo(parent.width, parent.height);
            const { texture = null, framebuffer = null, unpackPremultiplyAlpha = true, minFilter = gl.LINEAR, magFilter = gl.LINEAR, wrapS = gl.CLAMP_TO_EDGE, wrapT = gl.CLAMP_TO_EDGE, generateMipmap = this.isPOT, flipY = false } = config;
            this.minFilter = minFilter;
            this.magFilter = magFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
            this.generateMipmap = generateMipmap;
            this.flipY = flipY;
            this.unpackPremultiplyAlpha = unpackPremultiplyAlpha;
            if (framebuffer) {
                this.framebuffer = framebuffer;
            }
            if (texture) {
                this.texture = texture;
            }
            else {
                CreateGLTexture(this);
            }
        }
        setFilter(linear) {
            if (this.texture) {
                SetGLTextureFilterMode(this.texture, linear);
            }
        }
        create() {
            const texture = this.texture;
            if (texture) {
                DeleteGLTexture(texture);
            }
            return CreateGLTexture(this);
        }
        update() {
            const texture = this.texture;
            if (!texture) {
                return CreateGLTexture(this);
            }
            else {
                return UpdateGLTexture(this);
            }
        }
        setIndex(index) {
            this.dirtyIndex = (index !== this.index);
            this.index = index;
        }
        destroy() {
            DeleteGLTexture(this.texture);
            DeleteFramebuffer(this.framebuffer);
            this.parent = null;
            this.texture = null;
            this.framebuffer = null;
        }
    }

    class IndexedBuffer {
        constructor(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize) {
            this.batchSize = batchSize;
            this.dataSize = dataSize;
            this.indexSize = indexSize;
            this.vertexElementSize = vertexElementSize;
            this.quadIndexSize = quadIndexSize;
            this.vertexByteSize = vertexElementSize * dataSize;
            this.quadByteSize = this.vertexByteSize * 4;
            this.quadElementSize = vertexElementSize * 4;
            this.bufferByteSize = batchSize * this.quadByteSize;
            this.create();
        }
        create() {
            let ibo = [];
            for (let i = 0; i < (this.batchSize * this.indexSize); i += this.indexSize) {
                ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
            }
            this.data = new ArrayBuffer(this.bufferByteSize);
            this.index = new Uint16Array(ibo);
            this.vertexViewF32 = new Float32Array(this.data);
            this.vertexViewU32 = new Uint32Array(this.data);
            const gl = GL.get();
            this.vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.DYNAMIC_DRAW);
            this.indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            ibo = [];
        }
        destroy() {
        }
    }

    let instance$3;
    const WebGLRendererInstance = {
        get: () => {
            return instance$3;
        },
        set: (renderer) => {
            instance$3 = renderer;
        }
    };

    const shaderSource = {
        fragmentShader: `
#define SHADER_NAME SINGLE_QUAD_FRAG

precision highp float;

varying vec2 vTextureCoord;
varying float vTextureId;
varying vec4 vTintColor;

uniform sampler2D uTexture;

void main (void)
{
    vec4 color = texture2D(uTexture, vTextureCoord);

    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);
}`,
        vertexShader: `
#define SHADER_NAME SINGLE_QUAD_VERT

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
    class SingleTextureQuadShader {
        constructor(config = {}) {
            this.attribs = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };
            this.uniforms = { uProjectionMatrix: 0, uCameraMatrix: 0, uTexture: 0, uTime: 0, uResolution: 0 };
            this.renderToFBO = false;
            this.renderer = WebGLRendererInstance.get();
            const { batchSize = 4096, dataSize = 4, indexSize = 4, vertexElementSize = 6, quadIndexSize = 6, fragmentShader = shaderSource.fragmentShader, vertexShader = shaderSource.vertexShader, width = GetWidth(), height = GetHeight(), resolution = GetResolution(), renderToFBO = false } = config;
            this.buffer = new IndexedBuffer(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize);
            this.createShaders(fragmentShader, vertexShader);
            this.count = 0;
            this.renderToFBO = renderToFBO;
            const texture = new Texture(null, width * resolution, height * resolution);
            const binding = new GLTextureBinding(texture);
            texture.binding = binding;
            binding.framebuffer = CreateFramebuffer(binding.texture);
            this.texture = texture;
            this.framebuffer = binding.framebuffer;
        }
        createShaders(fragmentShaderSource, vertexShaderSource) {
            const gl = this.renderer.gl;
            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, fragmentShaderSource);
            gl.compileShader(fragmentShader);
            let failed = false;
            let message = gl.getShaderInfoLog(fragmentShader);
            if (message.length > 0) {
                failed = true;
                console.error(message);
            }
            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, vertexShaderSource);
            gl.compileShader(vertexShader);
            message = gl.getShaderInfoLog(fragmentShader);
            if (message.length > 0) {
                failed = true;
                console.error(message);
            }
            if (failed) {
                return;
            }
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);
            this.program = program;
            for (const key of Object.keys(this.attribs)) {
                const location = gl.getAttribLocation(program, key);
                gl.enableVertexAttribArray(location);
                this.attribs[key] = location;
            }
            for (const key of Object.keys(this.uniforms)) {
                this.uniforms[key] = gl.getUniformLocation(program, key);
            }
        }
        bind(projectionMatrix, cameraMatrix, textureID) {
            if (!this.program) {
                return false;
            }
            const renderer = this.renderer;
            const gl = renderer.gl;
            const uniforms = this.uniforms;
            gl.useProgram(this.program);
            gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
            gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);
            gl.uniform1i(uniforms.uTexture, renderer.textures.textureIndex[textureID]);
            gl.uniform1f(uniforms.uTime, performance.now());
            gl.uniform2f(uniforms.uResolution, renderer.width, renderer.height);
            this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);
            return true;
        }
        bindBuffers(indexBuffer, vertexBuffer) {
            const gl = this.renderer.gl;
            const stride = this.buffer.vertexByteSize;
            const attribs = this.attribs;
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.vertexAttribPointer(attribs.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
            gl.vertexAttribPointer(attribs.aTextureCoord, 2, gl.FLOAT, false, stride, 8);
            gl.vertexAttribPointer(attribs.aTextureId, 1, gl.FLOAT, false, stride, 16);
            gl.vertexAttribPointer(attribs.aTintColor, 4, gl.UNSIGNED_BYTE, true, stride, 20);
            this.count = 0;
        }
        draw(count) {
            const renderer = this.renderer;
            const gl = renderer.gl;
            const buffer = this.buffer;
            if (count === buffer.batchSize) {
                gl.bufferData(gl.ARRAY_BUFFER, buffer.data, gl.DYNAMIC_DRAW);
            }
            else {
                const view = buffer.vertexViewF32.subarray(0, count * buffer.quadElementSize);
                gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
            }
            if (this.renderToFBO) {
                renderer.fbo.add(this.framebuffer, true);
            }
            gl.drawElements(gl.TRIANGLES, count * buffer.quadIndexSize, gl.UNSIGNED_SHORT, 0);
            if (this.renderToFBO) {
                renderer.fbo.pop();
            }
        }
        flush() {
            const count = this.count;
            if (count === 0) {
                return false;
            }
            this.draw(count);
            this.prevCount = count;
            this.count = 0;
            return true;
        }
    }

    const fragmentShader = `
#define SHADER_NAME MULTI_QUAD_FRAG

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
}`;
    class MultiTextureQuadShader extends SingleTextureQuadShader {
        constructor(config = { fragmentShader }) {
            super(config);
        }
        createShaders(fragmentShaderSource, vertexShaderSource) {
            const maxTextures = GetMaxTextures();
            let src = '';
            for (let i = 1; i < maxTextures; i++) {
                if (i > 1) {
                    src += '\n\telse ';
                }
                if (i < maxTextures - 1) {
                    src += `if (vTextureId < ${i}.5)`;
                }
                src += '\n\t{';
                src += `\n\t\tcolor = texture2D(uTexture[${i}], vTextureCoord);`;
                src += '\n\t}';
            }
            fragmentShaderSource = fragmentShaderSource.replace(/%count%/gi, `${maxTextures}`);
            fragmentShaderSource = fragmentShaderSource.replace(/%forloop%/gi, src);
            super.createShaders(fragmentShaderSource, vertexShaderSource);
        }
        bind(projectionMatrix, cameraMatrix) {
            if (!this.program) {
                return false;
            }
            const renderer = this.renderer;
            const gl = renderer.gl;
            const uniforms = this.uniforms;
            gl.useProgram(this.program);
            gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
            gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);
            gl.uniform1iv(uniforms.uTexture, renderer.textures.textureIndex);
            gl.uniform1f(uniforms.uTime, performance.now());
            gl.uniform2f(uniforms.uResolution, renderer.width, renderer.height);
            this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);
            return true;
        }
    }

    function Ortho(width, height, near = -1, far = 1) {
        const m00 = -2 * (1 / -width);
        const m11 = -2 * (1 / height);
        const m22 = 2 * (1 / (near - far));
        return new Float32Array([m00, 0, 0, 0, 0, m11, 0, 0, 0, 0, m22, 0, -1, 1, 0, 1]);
    }

    class ShaderSystem {
        constructor(renderer, currentShader) {
            this.renderer = renderer;
            const stackEntry = {
                shader: new currentShader()
            };
            this.stack = [stackEntry];
            this.currentEntry = stackEntry;
            this.current = stackEntry.shader;
            this.singleQuadShader = new SingleTextureQuadShader();
        }
        add(shader, textureID) {
            const stackEntry = { shader, textureID };
            this.stack.push(stackEntry);
            return stackEntry;
        }
        set(shader, textureID) {
            this.flush();
            const renderer = this.renderer;
            const projectionMatrix = renderer.projectionMatrix;
            const cameraMatrix = renderer.currentCamera.matrix;
            const success = shader.bind(projectionMatrix, cameraMatrix, textureID);
            if (success) {
                const entry = this.add(shader, textureID);
                this.currentEntry = entry;
                this.current = shader;
            }
            return success;
        }
        setDefault(textureID) {
            this.set(this.singleQuadShader, textureID);
        }
        pop() {
            this.flush();
            const stack = this.stack;
            if (stack.length > 1) {
                stack.pop();
            }
            this.currentEntry = stack[stack.length - 1];
            this.current = this.currentEntry.shader;
        }
        reset() {
            this.pop();
            this.rebind();
        }
        flush() {
            if (this.current.flush()) {
                this.renderer.flushTotal++;
                return true;
            }
            return false;
        }
        rebind() {
            const renderer = this.renderer;
            const projectionMatrix = renderer.projectionMatrix;
            const cameraMatrix = renderer.currentCamera.matrix;
            const current = this.currentEntry;
            current.shader.bind(projectionMatrix, cameraMatrix, current.textureID);
        }
        popAndRebind() {
            this.pop();
            this.rebind();
        }
        clear() {
        }
        destroy() {
        }
    }

    const fragTemplate = [
        'precision mediump float;',
        'void main(void){',
        'float test = 0.1;',
        '%forloop%',
        'gl_FragColor = vec4(0.0);',
        '}'
    ].join('\n');
    function GenerateSrc(maxIfs) {
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
    function CheckShaderMaxIfStatements(maxIfs, gl) {
        const shader = gl.createShader(gl.FRAGMENT_SHADER);
        while (true) {
            const fragmentSrc = fragTemplate.replace(/%forloop%/gi, GenerateSrc(maxIfs));
            gl.shaderSource(shader, fragmentSrc);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                maxIfs = (maxIfs / 2) | 0;
            }
            else {
                break;
            }
        }
        return maxIfs;
    }

    class TextureSystem {
        constructor(renderer) {
            this.startActiveTexture = 0;
            this.renderer = renderer;
            this.tempTextures = [];
            this.textureIndex = [];
        }
        init() {
            const gl = this.renderer.gl;
            let maxGPUTextures = CheckShaderMaxIfStatements(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), gl);
            const maxConfigTextures = GetMaxTextures();
            if (maxConfigTextures === 0 || (maxConfigTextures > 0 && maxConfigTextures > maxGPUTextures)) {
                SetMaxTextures(maxGPUTextures);
            }
            else if (maxConfigTextures > 0 && maxConfigTextures < maxGPUTextures) {
                maxGPUTextures = Math.max(8, maxConfigTextures);
            }
            const tempTextures = this.tempTextures;
            if (tempTextures.length) {
                tempTextures.forEach(texture => {
                    gl.deleteTexture(texture);
                });
            }
            const index = [];
            for (let texturesIndex = 0; texturesIndex < maxGPUTextures; texturesIndex++) {
                const tempTexture = gl.createTexture();
                gl.activeTexture(gl.TEXTURE0 + texturesIndex);
                gl.bindTexture(gl.TEXTURE_2D, tempTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
                tempTextures[texturesIndex] = tempTexture;
                index.push(texturesIndex);
            }
            this.maxTextures = maxGPUTextures;
            this.textureIndex = index;
            this.currentActiveTexture = 1;
        }
        update() {
            const queue = BindingQueue.get();
            for (let i = 0; i < queue.length; i++) {
                const texture = queue[i];
                if (!texture.binding) {
                    texture.binding = new GLTextureBinding(texture);
                }
            }
            BindingQueue.clear();
        }
        reset() {
            const gl = this.renderer.gl;
            const temp = this.tempTextures;
            for (let i = 0; i < temp.length; i++) {
                gl.activeTexture(gl.TEXTURE0 + i);
                gl.bindTexture(gl.TEXTURE_2D, temp[i]);
            }
            this.currentActiveTexture = 1;
            this.startActiveTexture++;
        }
        bind(texture, index = 0) {
            const gl = this.renderer.gl;
            const binding = texture.binding;
            binding.setIndex(index);
            gl.activeTexture(gl.TEXTURE0 + index);
            gl.bindTexture(gl.TEXTURE_2D, binding.texture);
        }
        unbind(index = 0) {
            const gl = this.renderer.gl;
            gl.activeTexture(gl.TEXTURE0 + index);
            gl.bindTexture(gl.TEXTURE_2D, this.tempTextures[index]);
            if (index > 0) {
                this.startActiveTexture++;
            }
        }
        request(texture) {
            const gl = this.renderer.gl;
            const binding = texture.binding;
            const currentActiveTexture = this.currentActiveTexture;
            if (binding.indexCounter >= this.startActiveTexture) {
                return false;
            }
            binding.indexCounter = this.startActiveTexture;
            if (currentActiveTexture < this.maxTextures) {
                binding.setIndex(currentActiveTexture);
                gl.activeTexture(gl.TEXTURE0 + currentActiveTexture);
                gl.bindTexture(gl.TEXTURE_2D, binding.texture);
                this.currentActiveTexture++;
            }
            else {
                this.renderer.flush();
                this.startActiveTexture++;
                binding.indexCounter = this.startActiveTexture;
                binding.setIndex(1);
                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, binding.texture);
                this.currentActiveTexture = 2;
            }
            return true;
        }
    }

    class WebGLRenderer {
        constructor() {
            this.clearColor = [0, 0, 0, 1];
            this.flushTotal = 0;
            this.clearBeforeRender = true;
            this.optimizeRedraw = false;
            this.autoResize = true;
            this.contextLost = false;
            this.currentCamera = null;
            this.width = GetWidth();
            this.height = GetHeight();
            this.resolution = GetResolution();
            this.setBackgroundColor(GetBackgroundColor());
            const canvas = document.createElement('canvas');
            canvas.addEventListener('webglcontextlost', (event) => this.onContextLost(event), false);
            canvas.addEventListener('webglcontextrestored', () => this.onContextRestored(), false);
            this.canvas = canvas;
            this.fbo = new FBOSystem(this);
            this.textures = new TextureSystem(this);
            this.initContext();
            WebGLRendererInstance.set(this);
            this.shaders = new ShaderSystem(this, MultiTextureQuadShader);
        }
        initContext() {
            const gl = this.canvas.getContext('webgl', GetWebGLContext());
            GL.set(gl);
            this.gl = gl;
            gl.disable(gl.DEPTH_TEST);
            gl.disable(gl.CULL_FACE);
            this.resize(this.width, this.height, this.resolution);
            this.textures.init();
        }
        resize(width, height, resolution = 1) {
            this.width = width * resolution;
            this.height = height * resolution;
            this.resolution = resolution;
            const canvas = this.canvas;
            canvas.width = this.width;
            canvas.height = this.height;
            if (this.autoResize) {
                canvas.style.width = (this.width / resolution).toString() + 'px';
                canvas.style.height = (this.height / resolution).toString() + 'px';
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
            GetRGBArray(color, this.clearColor);
            return this;
        }
        reset(framebuffer = null, width = this.width, height = this.height) {
            const gl = this.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            gl.viewport(0, 0, width, height);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            this.flushTotal = 0;
            this.currentCamera = null;
            this.textures.update();
        }
        render(renderData) {
            if (this.contextLost) {
                return;
            }
            this.reset();
            if (this.optimizeRedraw && renderData.numDirtyFrames === 0 && renderData.numDirtyCameras === 0) {
                return;
            }
            const gl = this.gl;
            if (this.clearBeforeRender) {
                const cls = this.clearColor;
                gl.clearColor(cls[0], cls[1], cls[2], cls[3]);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
            const worlds = renderData.worldData;
            for (let i = 0; i < worlds.length; i++) {
                const { camera, renderList } = worlds[i];
                if (!this.currentCamera || !ExactEquals(camera.worldTransform, this.currentCamera.worldTransform)) {
                    this.flush();
                    this.currentCamera = camera;
                    this.shaders.rebind();
                }
                renderList.forEach(entry => {
                    if (entry.children.length) {
                        this.renderNode(entry);
                    }
                    else {
                        entry.node.renderGL(this);
                    }
                });
            }
            this.flush();
        }
        renderNode(entry) {
            entry.node.renderGL(this);
            entry.children.forEach(child => {
                if (child.children.length > 0) {
                    this.renderNode(child);
                }
                else {
                    child.node.renderGL(this);
                }
            });
            entry.node.postRenderGL(this);
        }
        flush() {
            this.shaders.flush();
        }
        destroy() {
            WebGLRendererInstance.set(undefined);
        }
    }

    class Layer extends GameObject {
        constructor() {
            super();
            this.type = 'Layer';
            this.transform.passthru = true;
            this.willRender = false;
        }
    }

    class RenderLayer extends Layer {
        constructor() {
            super();
            this.type = 'RenderLayer';
            this.willRender = true;
            this.willRenderChildren = true;
            this.willCacheChildren = true;
            this.setDirty(DIRTY_CONST.CHILD_CACHE);
            const width = GetWidth();
            const height = GetHeight();
            const resolution = GetResolution();
            const texture = new Texture(null, width * resolution, height * resolution);
            texture.binding = new GLTextureBinding(texture);
            texture.binding.framebuffer = CreateFramebuffer(texture.binding.texture);
            this.texture = texture;
            this.framebuffer = texture.binding.framebuffer;
        }
        renderGL(renderer) {
            if (this.numChildren > 0) {
                renderer.flush();
                if (this.isDirty(DIRTY_CONST.CHILD_CACHE)) {
                    renderer.fbo.add(this.framebuffer, true);
                    this.clearDirty(DIRTY_CONST.CHILD_CACHE);
                }
                else {
                    renderer.fbo.add(this.framebuffer, false);
                    this.postRenderGL(renderer);
                }
            }
        }
        postRenderGL(renderer) {
            const texture = this.texture;
            renderer.flush();
            renderer.fbo.pop();
            const { u0, v0, u1, v1 } = texture.firstFrame;
            renderer.textures.bind(texture);
            DrawTexturedQuad$1(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);
            renderer.textures.unbind();
            this.clearDirty(DIRTY_CONST.TRANSFORM);
        }
    }

    class EffectLayer extends RenderLayer {
        constructor() {
            super();
            this.shaders = [];
            this.type = 'EffectLayer';
        }
        postRender(renderer) {
            const shaders = this.shaders;
            const texture = this.texture;
            renderer.flush();
            renderer.fbo.pop();
            if (shaders.length === 0) {
                const { u0, v0, u1, v1 } = texture.firstFrame;
                renderer.textures.bind(texture);
                DrawTexturedQuad$1(renderer, 0, 0, texture.width, texture.height, u0, v0, u1, v1);
                renderer.textures.unbind();
            }
            else {
                let prevTexture = texture;
                for (let i = 0; i < shaders.length; i++) {
                    const shader = shaders[i];
                    const { u0, v0, u1, v1 } = prevTexture.firstFrame;
                    if (renderer.shaders.set(shader, 0)) {
                        shader.renderToFBO = true;
                        renderer.textures.bind(prevTexture);
                        BatchSingleQuad(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);
                        renderer.shaders.pop();
                        renderer.textures.unbind();
                        prevTexture = shader.texture;
                    }
                }
                const { u0, v0, u1, v1 } = prevTexture.firstFrame;
                renderer.textures.bind(prevTexture);
                DrawTexturedQuad$1(renderer, 0, 0, prevTexture.width, prevTexture.height, u0, v0, u1, v1);
                renderer.textures.unbind();
            }
            this.clearDirty(DIRTY_CONST.TRANSFORM);
        }
    }

    function BatchTexturedQuadBuffer(batch, renderer) {
        const texture = batch.texture;
        const shader = renderer.shaders.current;
        const buffer = shader.buffer;
        renderer.flush();
        renderer.textures.request(texture);
        batch.updateTextureIndex();
        const gl = renderer.gl;
        shader.bindBuffers(batch.indexBuffer, batch.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, batch.data, gl.STATIC_DRAW);
        gl.drawElements(gl.TRIANGLES, batch.count * buffer.quadIndexSize, gl.UNSIGNED_SHORT, 0);
        shader.prevCount = batch.count;
        renderer.flushTotal++;
        shader.bindBuffers(buffer.indexBuffer, buffer.vertexBuffer);
    }

    function Clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function GetVerticesFromValues(left, right, top, bottom, x, y, rotation = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
        const a = Math.cos(rotation + skewY) * scaleX;
        const b = Math.sin(rotation + skewY) * scaleX;
        const c = -Math.sin(rotation - skewX) * scaleY;
        const d = Math.cos(rotation - skewX) * scaleY;
        const x0 = (left * a) + (top * c) + x;
        const y0 = (left * b) + (top * d) + y;
        const x1 = (left * a) + (bottom * c) + x;
        const y1 = (left * b) + (bottom * d) + y;
        const x2 = (right * a) + (bottom * c) + x;
        const y2 = (right * b) + (bottom * d) + y;
        const x3 = (right * a) + (top * c) + x;
        const y3 = (right * b) + (top * d) + y;
        return { x0, y0, x1, y1, x2, y2, x3, y3 };
    }

    class SpriteBatch extends Layer {
        constructor(maxSize, texture) {
            super();
            this.glTextureIndex = 0;
            this.hasTexture = false;
            this.type = 'SpriteBatch';
            this.willRender = true;
            this.setTexture(texture);
            this.setMaxSize(maxSize);
        }
        resetBuffers() {
            let ibo = [];
            for (let i = 0; i < (this.maxSize * 4); i += 4) {
                ibo.push(i + 0, i + 1, i + 2, i + 2, i + 3, i + 0);
            }
            this.data = new ArrayBuffer(this.maxSize * 96);
            this.index = new Uint16Array(ibo);
            this.vertexViewF32 = new Float32Array(this.data);
            this.vertexViewU32 = new Uint32Array(this.data);
            const gl = GL.get();
            if (gl) {
                DeleteFramebuffer(this.vertexBuffer);
                DeleteFramebuffer(this.indexBuffer);
                this.vertexBuffer = gl.createBuffer();
                this.indexBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
                gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.index, gl.STATIC_DRAW);
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
            }
            ibo = [];
            this.count = 0;
        }
        setMaxSize(value) {
            this.maxSize = Clamp(value, 0, 65535);
            this.resetBuffers();
            return this;
        }
        setTexture(key) {
            let texture;
            if (key instanceof Texture) {
                texture = key;
            }
            else {
                texture = TextureManagerInstance.get().get(key);
            }
            if (!texture) {
                console.warn(`Invalid Texture key: ${key}`);
            }
            else {
                this.texture = texture;
                this.hasTexture = true;
                this.glTextureIndex = -1;
            }
            return this;
        }
        isRenderable() {
            return (this.visible && this.willRender && this.hasTexture && this.count > 0);
        }
        clear() {
            this.count = 0;
            return this;
        }
        addToBatch(frame, color, x0, y0, x1, y1, x2, y2, x3, y3) {
            if (this.count >= this.maxSize) {
                console.warn('SpriteBatch full');
                return this;
            }
            const { u0, u1, v0, v1 } = frame;
            const F32 = this.vertexViewF32;
            const U32 = this.vertexViewU32;
            const offset = this.count * 24;
            const textureIndex = (this.texture.binding) ? this.texture.binding.index : 0;
            F32[offset + 0] = x0;
            F32[offset + 1] = y0;
            F32[offset + 2] = u0;
            F32[offset + 3] = v0;
            F32[offset + 4] = textureIndex;
            U32[offset + 5] = color;
            F32[offset + 6] = x1;
            F32[offset + 7] = y1;
            F32[offset + 8] = u0;
            F32[offset + 9] = v1;
            F32[offset + 10] = textureIndex;
            U32[offset + 11] = color;
            F32[offset + 12] = x2;
            F32[offset + 13] = y2;
            F32[offset + 14] = u1;
            F32[offset + 15] = v1;
            F32[offset + 16] = textureIndex;
            U32[offset + 17] = color;
            F32[offset + 18] = x3;
            F32[offset + 19] = y3;
            F32[offset + 20] = u1;
            F32[offset + 21] = v0;
            F32[offset + 22] = textureIndex;
            U32[offset + 23] = color;
            this.setDirty(DIRTY_CONST.TRANSFORM);
            this.count++;
            return this;
        }
        add(config) {
            const { frame = null, x = 0, y = 0, rotation = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0, originX = 0, originY = 0, alpha = 1, tint = 0xffffff } = config;
            const textureFrame = this.texture.getFrame(frame);
            const { left, right, top, bottom } = textureFrame.getExtent(originX, originY);
            const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVerticesFromValues(left, right, top, bottom, x, y, rotation, scaleX, scaleY, skewX, skewY);
            const packedColor = PackColor(tint, alpha);
            return this.addToBatch(textureFrame, packedColor, x0, y0, x1, y1, x2, y2, x3, y3);
        }
        addXY(x, y, frame) {
            const textureFrame = this.texture.getFrame(frame);
            const { left, right, top, bottom } = textureFrame.getExtent(0, 0);
            const { x0, y0, x1, y1, x2, y2, x3, y3 } = GetVerticesFromValues(left, right, top, bottom, x, y);
            return this.addToBatch(textureFrame, 4294967295, x0, y0, x1, y1, x2, y2, x3, y3);
        }
        updateTextureIndex() {
            const textureIndex = this.texture.binding.index;
            if (textureIndex === this.glTextureIndex) {
                return;
            }
            const F32 = this.vertexViewF32;
            this.glTextureIndex = textureIndex;
            for (let i = 0; i < this.count; i++) {
                F32[(i * 24) + 4] = textureIndex;
                F32[(i * 24) + 10] = textureIndex;
                F32[(i * 24) + 16] = textureIndex;
                F32[(i * 24) + 22] = textureIndex;
            }
        }
        renderGL(renderer) {
            BatchTexturedQuadBuffer(this, renderer);
        }
        destroy() {
            super.destroy();
            DeleteFramebuffer(this.vertexBuffer);
            DeleteFramebuffer(this.indexBuffer);
            this.data = null;
            this.vertexViewF32 = null;
            this.vertexViewU32 = null;
            this.index = null;
            this.texture = null;
            this.hasTexture = false;
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

    var index$c = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AnimatedSprite: AnimatedSprite,
        Components: index$b,
        Container: Container,
        EffectLayer: EffectLayer,
        Layer: Layer,
        RenderLayer: RenderLayer,
        GameObject: GameObject,
        Sprite: Sprite,
        SpriteBatch: SpriteBatch,
        Text: Text
    });

    class Key {
        constructor(value) {
            this.capture = true;
            this.isDown = false;
            this.enabled = true;
            this.repeatRate = 0;
            this.canRepeat = true;
            this.timeDown = 0;
            this.timeUpdated = 0;
            this.timeUp = 0;
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        down(event) {
            if (!this.enabled) {
                return;
            }
            if (this.capture) {
                event.preventDefault();
            }
            if (this.isDown && this.canRepeat) {
                this.timeUpdated = event.timeStamp;
                const delay = this.timeUpdated - this.timeDown;
                if (this.downCallback && delay >= this.repeatRate) {
                    this.downCallback(this);
                }
            }
            else {
                this.isDown = true;
                this.timeDown = event.timeStamp;
                this.timeUpdated = event.timeStamp;
                if (this.downCallback) {
                    this.downCallback(this);
                }
            }
        }
        up(event) {
            if (!this.enabled) {
                return;
            }
            if (this.capture) {
                event.preventDefault();
            }
            if (this.isDown) {
                this.isDown = false;
                this.timeUp = event.timeStamp;
                this.timeUpdated = event.timeStamp;
                if (this.upCallback) {
                    this.upCallback(this);
                }
            }
        }
        reset() {
            this.isDown = false;
            this.timeUpdated = this.timeDown;
            this.timeUp = this.timeDown;
        }
        destroy() {
            this.downCallback = null;
            this.upCallback = null;
        }
    }

    class ArrowKeys {
        constructor(keyboardManager, config) {
            const { left = true, right = true, up = true, down = true, space = true } = config;
            const keys = keyboardManager.keys;
            if (left) {
                this.left = new Key('ArrowLeft');
                keys.set(this.left.value, this.left);
            }
            if (right) {
                this.right = new Key('ArrowRight');
                keys.set(this.right.value, this.right);
            }
            if (up) {
                this.up = new Key('ArrowUp');
                keys.set(this.up.value, this.up);
            }
            if (down) {
                this.down = new Key('ArrowDown');
                keys.set(this.down.value, this.down);
            }
            if (space) {
                this.space = new Key(' ');
                keys.set(this.space.value, this.space);
            }
        }
    }

    class DownKey extends Key {
        constructor() {
            super('ArrowDown');
        }
    }

    class LeftKey extends Key {
        constructor() {
            super('ArrowLeft');
        }
    }

    class RightKey extends Key {
        constructor() {
            super('ArrowRight');
        }
    }

    class SpaceKey extends Key {
        constructor() {
            super(' ');
        }
    }

    class UpKey extends Key {
        constructor() {
            super('ArrowUp');
        }
    }

    class WASDKeys {
        constructor(keyboardManager, config) {
            const { W = true, A = true, S = true, D = true, space = true } = config;
            const keys = keyboardManager.keys;
            if (W) {
                this.W = new Key('w');
                keys.set(this.W.value, this.W);
            }
            if (A) {
                this.A = new Key('a');
                keys.set(this.A.value, this.A);
            }
            if (S) {
                this.S = new Key('s');
                keys.set(this.S.value, this.S);
            }
            if (D) {
                this.D = new Key('d');
                keys.set(this.D.value, this.D);
            }
            if (space) {
                this.space = new Key(' ');
                keys.set(this.space.value, this.space);
            }
        }
    }

    var index$d = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ArrowKeys: ArrowKeys,
        DownKey: DownKey,
        LeftKey: LeftKey,
        RightKey: RightKey,
        SpaceKey: SpaceKey,
        UpKey: UpKey,
        WASDKeys: WASDKeys
    });

    function GetKeyDownDuration(key) {
        if (key.isDown) {
            return key.timeUpdated - key.timeDown;
        }
        else {
            return key.timeUp - key.timeDown;
        }
    }

    class Keyboard extends EventEmitter {
        constructor() {
            super();
            this.keyConversion = {
                Up: 'ArrowUp',
                Down: 'ArrowDown',
                Left: 'ArrowLeft',
                Right: 'ArrowRight',
                Spacebar: ' ',
                Win: 'Meta',
                Scroll: 'ScrollLock',
                Del: 'Delete',
                Apps: 'ContextMenu',
                Esc: 'Escape',
                Add: '+',
                Subtract: '-',
                Multiply: '*',
                Decimal: '.',
                Divide: '/'
            };
            this.keydownHandler = (event) => this.onKeyDown(event);
            this.keyupHandler = (event) => this.onKeyUp(event);
            this.blurHandler = () => this.onBlur();
            window.addEventListener('keydown', this.keydownHandler);
            window.addEventListener('keyup', this.keyupHandler);
            window.addEventListener('blur', this.blurHandler);
            this.keys = new Map();
        }
        addKeys(...keys) {
            keys.forEach(key => {
                this.keys.set(key.getValue(), key);
            });
        }
        clearKeys() {
            this.keys.clear();
        }
        onBlur() {
            this.keys.forEach(key => {
                key.reset();
            });
        }
        getKeyValue(key) {
            if (this.keyConversion.hasOwnProperty(key)) {
                return this.keyConversion[key];
            }
            else {
                return key;
            }
        }
        onKeyDown(event) {
            const value = this.getKeyValue(event.key);
            if (this.keys.has(value)) {
                const key = this.keys.get(value);
                key.down(event);
            }
            Emit(this, 'keydown-' + value, event);
            Emit(this, 'keydown', event);
        }
        onKeyUp(event) {
            const value = this.getKeyValue(event.key);
            if (this.keys.has(value)) {
                const key = this.keys.get(value);
                key.up(event);
            }
            Emit(this, 'keyup-' + value, event);
            Emit(this, 'keyup', event);
        }
        destroy() {
            window.removeEventListener('keydown', this.keydownHandler);
            window.removeEventListener('keyup', this.keyupHandler);
            window.removeEventListener('blur', this.blurHandler);
            Emit(this, 'destroy');
        }
    }

    function SetKeyRepeatRate(rate, ...keys) {
        keys.forEach(key => {
            key.repeatRate = rate;
        });
        return keys;
    }

    var index$e = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetKeyDownDuration: GetKeyDownDuration,
        Key: Key,
        Keys: index$d,
        Keyboard: Keyboard,
        SetKeyRepeatRate: SetKeyRepeatRate
    });

    function Append(mat1, mat2, out = new Matrix2D()) {
        const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = mat1;
        const { a: a2, b: b2, c: c2, d: d2, tx: tx2, ty: ty2 } = mat2;
        return out.set((a2 * a1) + (b2 * c1), (a2 * b1) + (b2 * d1), (c2 * a1) + (d2 * c1), (c2 * b1) + (d2 * d1), (tx2 * a1) + (ty2 * c1) + tx1, (tx2 * b1) + (ty2 * d1) + ty1);
    }

    function GlobalToLocal(mat, x, y, outPoint = new Vec2()) {
        const { a, b, c, d, tx, ty } = mat;
        const id = 1 / ((a * d) + (c * -b));
        outPoint.x = (d * id * x) + (-c * id * y) + (((ty * c) - (tx * d)) * id);
        outPoint.y = (a * id * y) + (-b * id * x) + (((-ty * a) + (tx * b)) * id);
        return outPoint;
    }

    class Mouse extends EventEmitter {
        constructor(target) {
            super();
            this.primaryDown = false;
            this.auxDown = false;
            this.secondaryDown = false;
            this.resolution = 1;
            this.mousedownHandler = (event) => this.onMouseDown(event);
            this.mouseupHandler = (event) => this.onMouseUp(event);
            this.mousemoveHandler = (event) => this.onMouseMove(event);
            this.blurHandler = () => this.onBlur();
            this.localPoint = new Vec2();
            this.hitPoint = new Vec2();
            this.transPoint = new Vec2();
            if (!target) {
                target = GameInstance.get().renderer.canvas;
            }
            target.addEventListener('mousedown', this.mousedownHandler);
            target.addEventListener('mouseup', this.mouseupHandler);
            window.addEventListener('mouseup', this.mouseupHandler);
            window.addEventListener('mousemove', this.mousemoveHandler);
            window.addEventListener('blur', this.blurHandler);
            this.target = target;
        }
        onBlur() {
        }
        onMouseDown(event) {
            this.positionToPoint(event);
            this.primaryDown = (event.button === 0);
            this.auxDown = (event.button === 1);
            this.secondaryDown = (event.button === 2);
            Emit(this, 'pointerdown', this.localPoint.x, this.localPoint.y, event.button, event);
        }
        onMouseUp(event) {
            this.positionToPoint(event);
            this.primaryDown = !(event.button === 0);
            this.auxDown = !(event.button === 1);
            this.secondaryDown = !(event.button === 2);
            Emit(this, 'pointerup', this.localPoint.x, this.localPoint.y, event.button, event);
        }
        onMouseMove(event) {
            this.positionToPoint(event);
            Emit(this, 'pointermove', this.localPoint.x, this.localPoint.y, event);
        }
        positionToPoint(event) {
            return this.localPoint.set(event.offsetX, event.offsetY);
        }
        getInteractiveChildren(parent, results) {
            const children = parent.children;
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (!child.visible || !child.input.enabled) {
                    continue;
                }
                results.push(child);
                if (child.input.enabledChildren && child.numChildren) {
                    this.getInteractiveChildren(child, results);
                }
            }
        }
        checkHitArea(entity, px, py) {
            if (entity.input.hitArea) {
                if (entity.input.hitArea.contains(px, py)) {
                    return true;
                }
            }
            else {
                return entity.transform.extent.contains(px, py);
            }
            return false;
        }
        hitTest(...entities) {
            const localX = this.localPoint.x;
            const localY = this.localPoint.y;
            const point = this.transPoint;
            for (let i = 0; i < entities.length; i++) {
                const entity = entities[i];
                if (!entity.world) {
                    continue;
                }
                const mat = Append(entity.world.camera.worldTransform, entity.transform.world);
                GlobalToLocal(mat, localX, localY, point);
                if (this.checkHitArea(entity, point.x, point.y)) {
                    this.hitPoint.set(point.x, point.y);
                    return true;
                }
            }
            return false;
        }
        hitTestChildren(parent, topOnly = true) {
            const output = [];
            if (!parent.visible) {
                return output;
            }
            const candidates = [];
            const parentInput = parent.input;
            if (parentInput && parentInput.enabled) {
                candidates.push(parent);
            }
            if (parentInput.enabledChildren && parent.numChildren) {
                this.getInteractiveChildren(parent, candidates);
            }
            for (let i = candidates.length - 1; i >= 0; i--) {
                const entity = candidates[i];
                if (this.hitTest(entity)) {
                    output.push(entity);
                    if (topOnly) {
                        break;
                    }
                }
            }
            return output;
        }
        shutdown() {
            this.target.addEventListener('mousedown', this.mousedownHandler);
            this.target.addEventListener('mouseup', this.mouseupHandler);
            window.addEventListener('mouseup', this.mouseupHandler);
            window.addEventListener('mousemove', this.mousemoveHandler);
            window.addEventListener('blur', this.blurHandler);
        }
    }

    var index$f = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Mouse: Mouse
    });

    function SetInteractive(...children) {
        children.forEach(child => {
            child.input.enabled = true;
        });
        return children;
    }

    var index$g = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Keyboard: index$e,
        Mouse: index$f,
        SetInteractive: SetInteractive
    });

    function ChebyshevDistance(x1, y1, x2, y2) {
        return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
    }

    function DistanceBetween(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function DistanceBetweenPointsSquared(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return dx * dx + dy * dy;
    }

    function DistancePower(x1, y1, x2, y2, pow = 2) {
        return Math.sqrt(Math.pow(x2 - x1, pow) + Math.pow(y2 - y1, pow));
    }

    function DistanceSquared(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return dx * dx + dy * dy;
    }

    function SnakeDistance(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    var index$h = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ChebyshevDistance: ChebyshevDistance,
        DistanceBetween: DistanceBetween,
        DistanceBetweenPoints: DistanceBetweenPoints,
        DistanceBetweenPointsSquared: DistanceBetweenPointsSquared,
        DistancePower: DistancePower,
        DistanceSquared: DistanceSquared,
        SnakeDistance: SnakeDistance
    });

    function FuzzyCeil(value, epsilon = 0.0001) {
        return Math.ceil(value - epsilon);
    }

    function FuzzyEqual(a, b, epsilon = 0.0001) {
        return Math.abs(a - b) < epsilon;
    }

    function FuzzyFloor(value, epsilon = 0.0001) {
        return Math.floor(value + epsilon);
    }

    function FuzzyGreaterThan(a, b, epsilon = 0.0001) {
        return a > b - epsilon;
    }

    function FuzzyLessThan(a, b, epsilon = 0.0001) {
        return a < b + epsilon;
    }

    var index$i = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FuzzyCeil: FuzzyCeil,
        FuzzyEqual: FuzzyEqual,
        FuzzyFloor: FuzzyFloor,
        FuzzyGreaterThan: FuzzyGreaterThan,
        FuzzyLessThan: FuzzyLessThan
    });

    function Factorial(value) {
        if (value === 0) {
            return 1;
        }
        let res = value;
        while (--value) {
            res *= value;
        }
        return res;
    }

    function Bernstein(n, i) {
        return Factorial(n) / Factorial(i) / Factorial(n - i);
    }

    function BezierInterpolation(v, k) {
        let b = 0;
        const n = v.length - 1;
        for (let i = 0; i <= n; i++) {
            b += Math.pow(1 - k, n - i) * Math.pow(k, i) * v[i] * Bernstein(n, i);
        }
        return b;
    }

    function CatmullRom(t, p0, p1, p2, p3) {
        const v0 = (p2 - p0) * 0.5;
        const v1 = (p3 - p1) * 0.5;
        const t2 = t * t;
        const t3 = t * t2;
        return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }

    function CatmullRomInterpolation(v, k) {
        const m = v.length - 1;
        let f = m * k;
        let i = Math.floor(f);
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor(f = m * (1 + k));
            }
            return CatmullRom(f - i, v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m]);
        }
        else {
            if (k < 0) {
                return v[0] - (CatmullRom(-f, v[0], v[0], v[1], v[1]) - v[0]);
            }
            if (k > 1) {
                return v[m] - (CatmullRom(f - m, v[m], v[m], v[m - 1], v[m - 1]) - v[m]);
            }
            return CatmullRom(f - i, v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2]);
        }
    }

    function P0(t, p) {
        const k = 1 - t;
        return k * k * k * p;
    }
    function P1(t, p) {
        const k = 1 - t;
        return 3 * k * k * t * p;
    }
    function P2(t, p) {
        return 3 * (1 - t) * t * t * p;
    }
    function P3(t, p) {
        return t * t * t * p;
    }
    function CubicBezierInterpolation(t, p0, p1, p2, p3) {
        return P0(t, p0) + P1(t, p1) + P2(t, p2) + P3(t, p3);
    }

    function Linear(p0, p1, t) {
        return (p1 - p0) * t + p0;
    }

    function LinearInterpolation(v, k) {
        const m = v.length - 1;
        const f = m * k;
        const i = Math.floor(f);
        if (k < 0) {
            return Linear(v[0], v[1], f);
        }
        else if (k > 1) {
            return Linear(v[m], v[m - 1], m - f);
        }
        else {
            return Linear(v[i], v[(i + 1 > m) ? m : i + 1], f - i);
        }
    }

    function P0$1(t, p) {
        const k = 1 - t;
        return k * k * p;
    }
    function P1$1(t, p) {
        return 2 * (1 - t) * t * p;
    }
    function P2$1(t, p) {
        return t * t * p;
    }
    function QuadraticBezierInterpolation(t, p0, p1, p2) {
        return P0$1(t, p0) + P1$1(t, p1) + P2$1(t, p2);
    }

    function SmoothStep(x, min, max) {
        if (x <= min) {
            return 0;
        }
        if (x >= max) {
            return 1;
        }
        x = (x - min) / (max - min);
        return x * x * (3 - 2 * x);
    }

    function SmoothStepInterpolation(t, min, max) {
        return min + (max - min) * SmoothStep(t, 0, 1);
    }

    function SmootherStep(x, min, max) {
        x = Math.max(0, Math.min(1, (x - min) / (max - min)));
        return x * x * x * (x * (x * 6 - 15) + 10);
    }

    function SmootherStepInterpolation(t, min, max) {
        return min + (max - min) * SmootherStep(t, 0, 1);
    }

    var index$j = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BezierInterpolation: BezierInterpolation,
        CatmullRomInterpolation: CatmullRomInterpolation,
        CubicBezierInterpolation: CubicBezierInterpolation,
        LinearInterpolation: LinearInterpolation,
        QuadraticBezierInterpolation: QuadraticBezierInterpolation,
        SmoothStepInterpolation: SmoothStepInterpolation,
        SmootherStepInterpolation: SmootherStepInterpolation
    });

    function Add(target, src) {
        target.a += src.a;
        target.b += src.b;
        target.c += src.c;
        target.d += src.d;
        target.tx += src.tx;
        target.ty += src.ty;
        return target;
    }

    function CopyToContext(src, context) {
        const { a, b, c, d, tx, ty } = src;
        context.transform(a, b, c, d, tx, ty);
        return context;
    }

    function Determinant(src) {
        const { a, b, c, d } = src;
        return (a * d) - (b * c);
    }

    function Frobenius(src) {
        return (Math.hypot(src.a, src.b, src.c, src.d, src.tx, src.ty, 1));
    }

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

    function ITRSS(target, x, y, angle = 0, scaleX = 1, scaleY = 1, skewX = 0, skewY = 0) {
        if (angle === 0) {
            return target.set(1, 0, 0, 1, x, y);
        }
        else {
            return target.set(Math.cos(angle + skewY) * scaleX, Math.sin(angle + skewY) * scaleX, -Math.sin(angle - skewX) * scaleY, Math.cos(angle - skewX) * scaleY, x, y);
        }
    }

    function Invert(target) {
        const { a, b, c, d, tx, ty } = target;
        let determinant = a * d - b * c;
        if (determinant) {
            determinant = 1 / determinant;
            target.set(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
        }
        return target;
    }

    function LocalToGlobal(mat, x, y, outPoint = new Vec2()) {
        const { a, b, c, d, tx, ty } = mat;
        outPoint.x = (a * x) + (c * y) + tx;
        outPoint.y = (b * x) + (d * y) + ty;
        return outPoint;
    }

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

    function MultiplyScalar(target, scale) {
        target.a *= scale;
        target.b *= scale;
        target.c *= scale;
        target.d *= scale;
        target.tx *= scale;
        target.ty *= scale;
        return target;
    }

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

    function Rotate(target, angle) {
        const { a, b, c, d, tx, ty } = target;
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        return target.set((a * cos) + (c * sin), (b * cos) + (d * sin), (a * -sin) + (c * cos), (b * -sin) + (d * cos), tx, ty);
    }

    function Scale(target, scaleX, scaleY) {
        target.a *= scaleX;
        target.b *= scaleX;
        target.c *= scaleY;
        target.d *= scaleY;
        return target;
    }

    function SetToContext(src, context) {
        const { a, b, c, d, tx, ty } = src;
        context.setTransform(a, b, c, d, tx, ty);
        return context;
    }

    function Skew(target, angleX, angleY) {
        target.b += Math.tan(angleX);
        target.c += Math.tan(angleY);
        return target;
    }

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

    function Translate(target, x, y) {
        const { a, b, c, d, tx, ty } = target;
        target.tx = (a * x) + (c * y) + tx;
        target.ty = (b * x) + (d * y) + ty;
        return target;
    }

    function Zero(target) {
        return target.set(0, 0, 0, 0, 0, 0);
    }

    var index$k = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Add: Add,
        Copy: Copy,
        CopyToContext: CopyToContext,
        Determinant: Determinant,
        Frobenius: Frobenius,
        GlobalToLocal: GlobalToLocal,
        Invert: Invert,
        ITRS: ITRS,
        ITRSS: ITRSS,
        LocalToGlobal: LocalToGlobal,
        Matrix2D: Matrix2D,
        Multiply: Multiply,
        MultiplyScalar: MultiplyScalar,
        MultiplyScalarAndAdd: MultiplyScalarAndAdd,
        Rotate: Rotate,
        Scale: Scale,
        SetToContext: SetToContext,
        Skew: Skew,
        Subtract: Subtract,
        Translate: Translate,
        Zero: Zero
    });

    function Add$1(a, b) {
        return new Matrix2D(a.a + b.a, a.b + b.b, a.c + b.c, a.c + b.c, a.tx + b.tx, a.ty + b.ty);
    }

    function Clone(src) {
        return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
    }

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

    function Invert$1(src) {
        const { a, b, c, d, tx, ty } = src;
        let determinant = (a * d) - (b * c);
        if (!determinant) {
            return null;
        }
        determinant = 1 / determinant;
        return new Matrix2D(d * determinant, -b * determinant, -c * determinant, a * determinant, (c * ty - d * tx) * determinant, (b * tx - a * ty) * determinant);
    }

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

    var index$l = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Add: Add$1,
        Append: Append,
        Clone: Clone,
        Equals: Equals,
        ExactEquals: ExactEquals,
        FromRotation: FromRotation,
        FromScaling: FromScaling,
        FromTranslation: FromTranslation,
        Identity: Identity,
        Invert: Invert$1,
        Multiply: Multiply$1,
        MultiplyScalar: MultiplyScalar$1,
        MultiplyScalarAndAdd: MultiplyScalarAndAdd$1,
        Rotate: Rotate$1,
        Scale: Scale$1,
        Subtract: Subtract$1,
        Translate: Translate$1,
        Zero: Zero$1
    });

    function GetPowerOfTwo(value) {
        const index = Math.log(value) / 0.6931471805599453;
        return (1 << Math.ceil(index));
    }

    function IsValuePowerOfTwo(value) {
        return (value > 0 && (value & (value - 1)) === 0);
    }

    var index$m = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GetPowerOfTwo: GetPowerOfTwo,
        IsSizePowerOfTwo: IsSizePowerOfTwo,
        IsValuePowerOfTwo: IsValuePowerOfTwo
    });

    function SnapCeil(value, gap, start = 0, divide = false) {
        if (gap === 0) {
            return value;
        }
        value -= start;
        value = gap * Math.ceil(value / gap);
        return (divide) ? (start + value) / gap : start + value;
    }

    function SnapFloor(value, gap, start = 0, divide = false) {
        if (gap === 0) {
            return value;
        }
        value -= start;
        value = gap * Math.floor(value / gap);
        return (divide) ? (start + value) / gap : start + value;
    }

    function SnapTo(value, gap, start = 0, divide = false) {
        if (gap === 0) {
            return value;
        }
        value -= start;
        value = gap * Math.round(value / gap);
        return (divide) ? (start + value) / gap : start + value;
    }

    var index$n = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SnapCeil: SnapCeil,
        SnapFloor: SnapFloor,
        SnapTo: SnapTo
    });

    function Average(values) {
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            sum += (+values[i]);
        }
        return sum / values.length;
    }

    function CeilTo(value, place = 0, base = 10) {
        const p = Math.pow(base, -place);
        return Math.ceil(value * p) / p;
    }

    function Difference(a, b) {
        return Math.abs(a - b);
    }

    function FloatBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    function FloorTo(value, place = 0, base = 10) {
        const p = Math.pow(base, -place);
        return Math.floor(value * p) / p;
    }

    function FromPercent(percent, min, max) {
        percent = Clamp(percent, 0, 1);
        return (max - min) * percent;
    }

    function GetSpeed(distance, time) {
        return (distance / time) / 1000;
    }

    function MaxAdd(value, amount, max) {
        return Math.min(value + amount, max);
    }

    function MinSub(value, amount, min) {
        return Math.max(value - amount, min);
    }

    function Percent(value, min, max, upperMax) {
        if (max === undefined) {
            max = min + 1;
        }
        let percentage = (value - min) / (max - min);
        if (percentage > 1) {
            if (upperMax !== undefined) {
                percentage = ((upperMax - value)) / (upperMax - max);
                if (percentage < 0) {
                    percentage = 0;
                }
            }
            else {
                percentage = 1;
            }
        }
        else if (percentage < 0) {
            percentage = 0;
        }
        return percentage;
    }

    function RadToDeg(radians) {
        return radians * MATH_CONST.RAD_TO_DEG;
    }

    function RoundAwayFromZero(value) {
        return (value > 0) ? Math.ceil(value) : Math.floor(value);
    }

    function RoundTo(value, place = 0, base = 10) {
        const p = Math.pow(base, -place);
        return Math.round(value * p) / p;
    }

    function SinCosTableGenerator(length, sinAmp = 1, cosAmp = 1, frequency = 1) {
        frequency *= Math.PI / length;
        const cos = [];
        const sin = [];
        for (let c = 0; c < length; c++) {
            cosAmp -= sinAmp * frequency;
            sinAmp += cosAmp * frequency;
            cos[c] = cosAmp;
            sin[c] = sinAmp;
        }
        return {
            sin,
            cos,
            length
        };
    }

    function ToXY(index, width, height, out = new Vec2()) {
        let x = 0;
        let y = 0;
        const total = width * height;
        if (index > 0 && index <= total) {
            if (index > width - 1) {
                y = Math.floor(index / width);
                x = index - (y * width);
            }
            else {
                x = index;
            }
            out.set(x, y);
        }
        return out;
    }

    function TransformXY(x, y, positionX, positionY, rotation, scaleX, scaleY, output = new Vec2()) {
        const radianSin = Math.sin(rotation);
        const radianCos = Math.cos(rotation);
        const a = radianCos * scaleX;
        const b = radianSin * scaleX;
        const c = -radianSin * scaleY;
        const d = radianCos * scaleY;
        const id = 1 / ((a * d) + (c * -b));
        output.x = (d * id * x) + (-c * id * y) + (((positionY * c) - (positionX * d)) * id);
        output.y = (a * id * y) + (-b * id * x) + (((-positionY * a) + (positionX * b)) * id);
        return output;
    }

    function Within(a, b, tolerance) {
        return (Math.abs(a - b) <= tolerance);
    }

    var index$o = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Angle: index,
        Distance: index$h,
        Fuzzy: index$i,
        Interpolation: index$j,
        Matrix2d: index$k,
        Matrix2dFuncs: index$l,
        Pow2: index$m,
        Snap: index$n,
        Vec2: index$a,
        Average: Average,
        Bernstein: Bernstein,
        Between: Between,
        CatmullRom: CatmullRom,
        CeilTo: CeilTo,
        Clamp: Clamp,
        MATH_CONST: MATH_CONST,
        DegToRad: DegToRad,
        Difference: Difference,
        Factorial: Factorial,
        FloatBetween: FloatBetween,
        FloorTo: FloorTo,
        FromPercent: FromPercent,
        GetSpeed: GetSpeed,
        Linear: Linear,
        MaxAdd: MaxAdd,
        MinSub: MinSub,
        Percent: Percent,
        RadToDeg: RadToDeg,
        RoundAwayFromZero: RoundAwayFromZero,
        RoundTo: RoundTo,
        SinCosTableGenerator: SinCosTableGenerator,
        SmootherStep: SmootherStep,
        SmoothStep: SmoothStep,
        ToXY: ToXY,
        TransformXY: TransformXY,
        Within: Within,
        Wrap: Wrap
    });

    const Arne16 = [
        '#000',
        '#9D9D9D',
        '#FFF',
        '#BE2633',
        '#E06F8B',
        '#493C2B',
        '#A46422',
        '#EB8931',
        '#F7E26B',
        '#2F484E',
        '#44891A',
        '#A3CE27',
        '#1B2632',
        '#005784',
        '#31A2F2',
        '#B2DCEF'
    ];

    const C64 = [
        '#000',
        '#fff',
        '#8b4131',
        '#7bbdc5',
        '#8b41ac',
        '#6aac41',
        '#3931a4',
        '#d5de73',
        '#945a20',
        '#5a4100',
        '#bd736a',
        '#525252',
        '#838383',
        '#acee8b',
        '#7b73de',
        '#acacac'
    ];

    const CGA = [
        '#000',
        '#2234d1',
        '#0c7e45',
        '#44aacc',
        '#8a3622',
        '#5c2e78',
        '#aa5c3d',
        '#b5b5b5',
        '#5e606e',
        '#4c81fb',
        '#6cd947',
        '#7be2f9',
        '#eb8a60',
        '#e23d69',
        '#ffd93f',
        '#fff'
    ];

    const JMP = [
        '#000',
        '#191028',
        '#46af45',
        '#a1d685',
        '#453e78',
        '#7664fe',
        '#833129',
        '#9ec2e8',
        '#dc534b',
        '#e18d79',
        '#d6b97b',
        '#e9d8a1',
        '#216c4b',
        '#d365c8',
        '#afaab9',
        '#f5f4eb'
    ];

    const MSX = [
        '#000',
        '#191028',
        '#46af45',
        '#a1d685',
        '#453e78',
        '#7664fe',
        '#833129',
        '#9ec2e8',
        '#dc534b',
        '#e18d79',
        '#d6b97b',
        '#e9d8a1',
        '#216c4b',
        '#d365c8',
        '#afaab9',
        '#fff'
    ];

    const PICO8 = [
        '#000',
        '#1D2B53',
        '#7E2553',
        '#008751',
        '#AB5236',
        '#5F574F',
        '#C2C3C7',
        '#FFF1E8',
        '#FF004D',
        '#FFA300',
        '#FFEC27',
        '#00E436',
        '#29ADFF',
        '#83769C',
        '#FF77A8',
        '#FFCCAA'
    ];

    var index$p = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Arne16: Arne16,
        C64: C64,
        CGA: CGA,
        JMP: JMP,
        MSX: MSX,
        PICO8: PICO8
    });

    function AtlasParser(texture, data) {
        let frames;
        if (Array.isArray(data.textures)) {
            frames = data.textures[0].frames;
        }
        else if (Array.isArray(data.frames)) {
            frames = data.frames;
        }
        else if (data.hasOwnProperty('frames')) {
            frames = Object.values(data.frames);
        }
        else {
            console.warn('Invalid Texture Atlas JSON');
        }
        if (frames) {
            let newFrame;
            for (let i = 0; i < frames.length; i++) {
                const src = frames[i];
                newFrame = texture.addFrame(src.filename, src.frame.x, src.frame.y, src.frame.w, src.frame.h);
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

    function GetValue(node, attribute) {
        return parseInt(node.getAttribute(attribute), 10);
    }
    function BitmapTextParser(texture, xml, frame) {
        const xSpacing = 0;
        const ySpacing = 0;
        const info = xml.getElementsByTagName('info')[0];
        const common = xml.getElementsByTagName('common')[0];
        const data = {
            font: info.getAttribute('face'),
            size: GetValue(info, 'size'),
            lineHeight: GetValue(common, 'lineHeight') + ySpacing,
            chars: {}
        };
        const letters = xml.getElementsByTagName('char');
        for (let i = 0; i < letters.length; i++) {
            const node = letters[i];
            const charCode = GetValue(node, 'id');
            const x = GetValue(node, 'x');
            const y = GetValue(node, 'y');
            const width = GetValue(node, 'width');
            const height = GetValue(node, 'height');
            data.chars[charCode] =
                {
                    x,
                    y,
                    width,
                    height,
                    xOffset: GetValue(node, 'xoffset'),
                    yOffset: GetValue(node, 'yoffset'),
                    xAdvance: GetValue(node, 'xadvance') + xSpacing,
                    kerning: {}
                };
            texture.addFrame(charCode, x, y, width, height);
        }
        const kernings = xml.getElementsByTagName('kerning');
        for (let i = 0; i < kernings.length; i++) {
            const kern = kernings[i];
            const first = GetValue(kern, 'first');
            const second = GetValue(kern, 'second');
            const amount = GetValue(kern, 'amount');
            data.chars[second].kerning[first] = amount;
        }
        return data;
    }

    function SpriteSheetParser(texture, x, y, width, height, frameConfig) {
        const { frameWidth = null, endFrame = -1, margin = 0, spacing = 0 } = frameConfig;
        let { frameHeight = null, startFrame = 0 } = frameConfig;
        if (!frameHeight) {
            frameHeight = frameWidth;
        }
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
            const w = fx + frameWidth;
            const h = fy + frameHeight;
            if (w > width) {
                ax = w - width;
            }
            if (h > height) {
                ay = h - height;
            }
            texture.addFrame(i, x + fx, y + fy, frameWidth - ax, frameHeight - ay);
            fx += frameWidth + spacing;
            if (fx + frameWidth > width) {
                fx = margin;
                fy += frameHeight + spacing;
            }
        }
    }

    var index$q = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AtlasParser: AtlasParser,
        BitmapTextParser: BitmapTextParser,
        SpriteSheetParser: SpriteSheetParser
    });

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

    function PixelTexture(config) {
        const { data = [], palette = Arne16, pixelWidth = 1, pixelHeight = pixelWidth, preRender = null, postRender = null } = config;
        let { canvas = null, resizeCanvas = true, clearCanvas = true } = config;
        const width = Math.floor(Math.abs(data[0].length * pixelWidth));
        const height = Math.floor(Math.abs(data.length * pixelHeight));
        if (!canvas) {
            canvas = CreateCanvas(width, height).canvas;
            resizeCanvas = false;
            clearCanvas = false;
        }
        if (resizeCanvas) {
            canvas.width = width;
            canvas.height = height;
        }
        const ctx = canvas.getContext('2d');
        if (clearCanvas) {
            ctx.clearRect(0, 0, width, height);
        }
        if (preRender) {
            preRender(canvas, ctx);
        }
        for (let y = 0; y < data.length; y++) {
            const row = data[y];
            for (let x = 0; x < row.length; x++) {
                const d = row[x];
                if (d !== '.' && d !== ' ') {
                    ctx.fillStyle = palette[parseInt('0x' + d.toUpperCase())];
                    ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
                }
            }
        }
        if (postRender) {
            postRender(canvas, ctx);
        }
        return new Texture(canvas);
    }

    class RenderTexture extends Texture {
        constructor(renderer, width = 256, height = width) {
            super(null, width, height);
            this.renderer = renderer;
        }
        cls() {
            const renderer = this.renderer;
            const gl = renderer.gl;
            renderer.reset(this.binding.framebuffer, this.width, this.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            renderer.reset();
            return this;
        }
        batchStart() {
            return this;
        }
        batchDraw(sprites) {
            const renderer = this.renderer;
            for (let i = 0, len = sprites.length; i < len; i++) {
                sprites[i].renderGL(renderer);
            }
            return this;
        }
        batchEnd() {
            const renderer = this.renderer;
            renderer.flush();
            renderer.reset();
            return this;
        }
        draw(...sprites) {
            this.batchStart();
            this.batchDraw(sprites);
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

    var index$r = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CanvasTexture: CanvasTexture,
        GridTexture: GridTexture,
        PixelTexture: PixelTexture,
        RenderTexture: RenderTexture,
        SolidColorTexture: SolidColorTexture
    });

    function GetFrames(texture, frames) {
        const output = [];
        frames.forEach((key) => {
            output.push(texture.getFrame(key));
        });
        return output;
    }

    function GetFramesInRange(texture, config) {
        const { prefix = '', start = 0, zeroPad = 0, suffix = '' } = config;
        let end = config.end;
        const output = [];
        const diff = (start < end) ? 1 : -1;
        end += diff;
        for (let i = start; i !== end; i += diff) {
            const frameKey = (prefix + i.toString().padStart(zeroPad, '0') + suffix);
            output.push(texture.getFrame(frameKey));
        }
        return output;
    }

    function SetFilter(linear, ...textures) {
        textures.forEach(texture => {
            if (texture.binding) {
                texture.binding.setFilter(linear);
            }
        });
        return textures;
    }

    class TextureManager {
        constructor() {
            this.textures = new Map();
            this.createDefaultTextures();
            TextureManagerInstance.set(this);
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
            const textures = this.textures;
            if (textures.has(key)) {
                return textures.get(key);
            }
            else {
                return textures.get('__MISSING');
            }
        }
        has(key) {
            return this.textures.has(key);
        }
        add(key, source) {
            let texture;
            const textures = this.textures;
            if (!textures.has(key)) {
                if (source instanceof Texture) {
                    texture = source;
                }
                else {
                    texture = new Texture(source);
                }
                texture.key = key;
                textures.set(key, texture);
            }
            return texture;
        }
    }

    var index$s = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CreateCanvas: CreateCanvas,
        Frame: Frame,
        GetFrames: GetFrames,
        GetFramesInRange: GetFramesInRange,
        SetFilter: SetFilter,
        Palettes: index$p,
        Parsers: index$q,
        Types: index$r,
        Texture: Texture,
        TextureManager: TextureManager
    });

    function NOOP$1() {
    }

    function AddTimer(clock, config) {
        const { duration = 0, repeat = 0, delay = -1, onStart = NOOP$1, onUpdate = NOOP$1, onRepeat = NOOP$1, onComplete = NOOP$1 } = config;
        const timer = {
            elapsed: duration,
            duration,
            repeat,
            delay,
            update: null,
            onStart,
            onUpdate,
            onRepeat,
            onComplete
        };
        timer.update = (delta) => {
            if (timer.delay > 0) {
                timer.delay -= delta;
                if (timer.delay < 0) {
                    timer.delay = 0;
                }
                else {
                    return false;
                }
            }
            if (timer.delay === 0) {
                timer.onStart();
                timer.delay = -1;
            }
            if (timer.delay === -1) {
                timer.elapsed -= delta;
                timer.onUpdate(delta, timer.elapsed / timer.duration);
                if (timer.elapsed <= 0) {
                    if (timer.repeat > 0) {
                        timer.repeat--;
                        timer.elapsed = timer.duration;
                        timer.onRepeat(timer.repeat);
                    }
                    else {
                        timer.elapsed = 0;
                        timer.onComplete();
                    }
                }
            }
            return (timer.elapsed === 0);
        };
        clock.events.add(timer);
    }

    function AddDelayedCall(clock, delay, callback) {
        AddTimer(clock, {
            duration: 0,
            delay,
            onComplete: callback
        });
    }

    class Clock {
        constructor(world) {
            this.world = world;
            this.timeScale = 1;
            this.events = new Set();
        }
        update(delta, time) {
            this.now = time;
            delta *= this.timeScale;
            this.events.forEach(timer => {
                if (timer.update(delta)) {
                    this.events.delete(timer);
                }
            });
        }
    }

    var index$t = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AddDelayedCall: AddDelayedCall,
        AddTimer: AddTimer,
        Clock: Clock,
        NOOP: NOOP$1
    });

    function DeleteGLBuffer(buffer) {
        const gl = GL.get();
        if (gl.isBuffer(buffer)) {
            gl.deleteBuffer(buffer);
        }
    }

    var index$u = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CreateFramebuffer: CreateFramebuffer,
        CreateGLTexture: CreateGLTexture,
        DeleteFramebuffer: DeleteFramebuffer,
        DeleteGLBuffer: DeleteGLBuffer,
        DeleteGLTexture: DeleteGLTexture,
        GL: GL,
        Ortho: Ortho,
        PackColor: PackColor,
        PackColors: PackColors,
        SetGLTextureFilterMode: SetGLTextureFilterMode,
        UpdateGLTexture: UpdateGLTexture,
        WebGLRenderer: WebGLRenderer
    });

    const WorldRenderEvent = 'worldrender';

    const WorldShutdownEvent = 'worldshutdown';

    var index$v = /*#__PURE__*/Object.freeze({
        __proto__: null,
        WorldRenderEvent: WorldRenderEvent,
        WorldShutdownEvent: WorldShutdownEvent
    });

    function CalculateTotalRenderable(entry, renderData) {
        renderData.numRendered++;
        renderData.numRenderable++;
        if (entry.node.dirtyFrame >= renderData.gameFrame) {
            renderData.dirtyFrame++;
        }
        entry.children.forEach(child => {
            if (child.children.length > 0) {
                CalculateTotalRenderable(child, renderData);
            }
        });
    }

    function HasDirtyChildren(parent) {
        if (parent.node.isDirty(DIRTY_CONST.CHILD_CACHE)) {
            return true;
        }
        const stack = [parent];
        while (stack.length > 0) {
            const entry = stack.pop();
            if (entry.node.isDirty(DIRTY_CONST.TRANSFORM)) {
                return true;
            }
            const numChildren = entry.children.length;
            if (numChildren > 0) {
                for (let i = 0; i < numChildren; i++) {
                    stack.push(entry.children[i]);
                }
            }
        }
        stack.length = 0;
        return false;
    }

    function UpdateCachedLayers(cachedLayers, dirtyCamera) {
        cachedLayers.forEach(layer => {
            if (dirtyCamera || HasDirtyChildren(layer)) {
                layer.node.setDirty(DIRTY_CONST.CHILD_CACHE);
            }
            else {
                layer.children.length = 0;
            }
        });
    }

    function WorldDepthFirstSearch(cachedLayers, parent, output = []) {
        for (let i = 0; i < parent.numChildren; i++) {
            const node = parent.children[i];
            if (node.isRenderable()) {
                const children = [];
                const entry = { node, children };
                output.push(entry);
                if (node.willRenderChildren && node.numChildren > 0) {
                    if (node.willCacheChildren) {
                        cachedLayers.push(entry);
                    }
                    WorldDepthFirstSearch(cachedLayers, node, children);
                }
            }
        }
        return output;
    }

    function BuildRenderList(world) {
        const cachedLayers = [];
        const stack = [];
        const entries = WorldDepthFirstSearch(cachedLayers, world, stack);
        const renderData = world.renderData;
        if (cachedLayers.length > 0) {
            UpdateCachedLayers(cachedLayers, world.camera.dirtyRender);
        }
        entries.forEach(entry => {
            if (entry.children.length) {
                CalculateTotalRenderable(entry, renderData);
            }
            else {
                renderData.numRendered++;
                renderData.numRenderable++;
                if (entry.node.dirtyFrame >= renderData.gameFrame) {
                    renderData.dirtyFrame++;
                }
            }
        });
        renderData.renderList = entries;
        if (world.forceRefresh) {
            renderData.dirtyFrame++;
            world.forceRefresh = false;
        }
    }

    function MergeRenderData(sceneRenderData, worldRenderData) {
        sceneRenderData.numDirtyFrames += worldRenderData.dirtyFrame;
        sceneRenderData.numTotalFrames += worldRenderData.numRendered;
        if (worldRenderData.camera.dirtyRender) {
            sceneRenderData.numDirtyCameras++;
        }
        sceneRenderData.worldData.push(worldRenderData);
    }

    function ResetWorldRenderData(renderData, gameFrame) {
        renderData.gameFrame = gameFrame;
        renderData.dirtyFrame = 0;
        renderData.numRendered = 0;
        renderData.numRenderable = 0;
        renderData.renderList.length = 0;
    }

    class BaseWorld extends GameObject {
        constructor(scene) {
            super();
            this.forceRefresh = false;
            this.type = 'BaseWorld';
            this.scene = scene;
            this.world = this;
            this.events = new Map();
            this._updateListener = On(scene, 'update', (delta, time) => this.update(delta, time));
            this._renderListener = On(scene, 'render', (renderData) => this.render(renderData));
            this._shutdownListener = On(scene, 'shutdown', () => this.shutdown());
            Once(scene, 'destroy', () => this.destroy());
        }
        update(delta, time) {
            if (!this.willUpdate) {
                return;
            }
            Emit(this, UpdateEvent, delta, time, this);
            super.update(delta, time);
        }
        postUpdate(delta, time) {
            Emit(this, PostUpdateEvent, delta, time, this);
        }
        render(sceneRenderData) {
            const renderData = this.renderData;
            ResetWorldRenderData(renderData, sceneRenderData.gameFrame);
            if (!this.willRender || !this.visible) {
                return;
            }
            BuildRenderList(this);
            Emit(this, WorldRenderEvent, renderData, this);
            MergeRenderData(sceneRenderData, renderData);
            if (this.camera) {
                this.camera.dirtyRender = false;
            }
        }
        shutdown() {
            const scene = this.scene;
            Off(scene, 'update', this._updateListener);
            Off(scene, 'render', this._renderListener);
            Off(scene, 'shutdown', this._shutdownListener);
            RemoveChildren(this);
            Emit(this, WorldShutdownEvent, this);
            ResetWorldRenderData(this.renderData, 0);
            if (this.camera) {
                this.camera.reset();
            }
        }
        destroy(reparentChildren) {
            super.destroy(reparentChildren);
            Emit(this, DestroyEvent, this);
            ResetWorldRenderData(this.renderData, 0);
            if (this.camera) {
                this.camera.destroy();
            }
            this.events.clear();
            this.camera = null;
            this.renderData = null;
            this.events = null;
        }
    }

    function CreateWorldRenderData(camera) {
        return {
            camera,
            gameFrame: 0,
            dirtyFrame: 0,
            numRendered: 0,
            numRenderable: 0,
            renderList: []
        };
    }

    class StaticWorld extends BaseWorld {
        constructor(scene) {
            super(scene);
            this.type = 'StaticWorld';
            this.camera = new StaticCamera();
            this.renderData = CreateWorldRenderData(this.camera);
        }
    }

    class World extends BaseWorld {
        constructor(scene) {
            super(scene);
            this.enableCameraCull = true;
            this.type = 'World';
            this.camera = new Camera();
            this.renderData = CreateWorldRenderData(this.camera);
        }
    }

    var index$w = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BaseWorld: BaseWorld,
        BuildRenderList: BuildRenderList,
        CalculateTotalRenderable: CalculateTotalRenderable,
        CreateWorldRenderData: CreateWorldRenderData,
        Events: index$v,
        HasDirtyChildren: HasDirtyChildren,
        MergeRenderData: MergeRenderData,
        ResetWorldRenderData: ResetWorldRenderData,
        StaticWorld: StaticWorld,
        UpdateCachedLayers: UpdateCachedLayers,
        World: World,
        WorldDepthFirstSearch: WorldDepthFirstSearch
    });

    function CreateSceneRenderData() {
        return {
            gameFrame: 0,
            numTotalFrames: 0,
            numDirtyFrames: 0,
            numDirtyCameras: 0,
            worldData: []
        };
    }

    function ResetSceneRenderData(renderData, gameFrame = 0) {
        renderData.gameFrame = gameFrame;
        renderData.numTotalFrames = 0;
        renderData.numDirtyFrames = 0;
        renderData.numDirtyCameras = 0;
        renderData.worldData.length = 0;
    }

    let instance$4;
    const SceneManagerInstance = {
        get: () => {
            return instance$4;
        },
        set: (manager) => {
            instance$4 = manager;
        }
    };

    class SceneManager {
        constructor() {
            this.scenes = new Map();
            this.sceneIndex = 0;
            this.flush = false;
            this.renderResult = CreateSceneRenderData();
            this.game = GameInstance.get();
            SceneManagerInstance.set(this);
            Once(this.game, 'boot', () => this.boot());
        }
        boot() {
            GetScenes().forEach(scene => new scene());
        }
        update(delta, time) {
            for (const scene of this.scenes.values()) {
                Emit(scene, 'update', delta, time);
            }
        }
        render(gameFrame) {
            const results = this.renderResult;
            ResetSceneRenderData(results, gameFrame);
            for (const scene of this.scenes.values()) {
                Emit(scene, 'render', results);
            }
            if (this.flush) {
                results.numDirtyFrames++;
                this.flush = false;
            }
            return results;
        }
    }

    class Game extends EventEmitter {
        constructor(...settings) {
            super();
            this.VERSION = '4.0.0-beta1';
            this.isBooted = false;
            this.isPaused = false;
            this.willUpdate = true;
            this.willRender = true;
            this.lastTick = 0;
            this.elapsed = 0;
            this.frame = 0;
            GameInstance.set(this);
            DOMContentLoaded(() => this.boot(settings));
        }
        boot(settings) {
            settings.forEach(setting => setting());
            const renderer = GetRenderer();
            this.renderer = new renderer();
            this.textureManager = new TextureManager();
            this.sceneManager = new SceneManager();
            this.isBooted = true;
            GetBanner();
            Emit(this, 'boot');
            this.lastTick = performance.now();
            this.step(this.lastTick);
        }
        pause() {
            this.isPaused = true;
        }
        resume() {
            this.isPaused = false;
            this.lastTick = performance.now();
        }
        step(time) {
            const delta = time - this.lastTick;
            this.lastTick = time;
            this.elapsed += delta;
            if (!this.isPaused) {
                if (this.willUpdate) {
                    this.sceneManager.update(delta, time);
                    Emit(this, 'update', delta, time);
                }
                if (this.willRender) {
                    this.renderer.render(this.sceneManager.render(this.frame));
                }
            }
            this.frame++;
            GameInstance.setFrame(this.frame);
            GameInstance.setElapsed(this.elapsed);
            requestAnimationFrame(now => this.step(now));
        }
        destroy() {
        }
    }

    class Loader extends EventEmitter {
        constructor() {
            super();
            this.baseURL = '';
            this.path = '';
            this.crossOrigin = 'anonymous';
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
        start() {
            if (this.isLoading) {
                return null;
            }
            return new Promise((resolve, reject) => {
                this.completed.clear();
                this.progress = 0;
                if (this.queue.size > 0) {
                    this.isLoading = true;
                    this.onComplete = resolve;
                    this.onError = reject;
                    Emit(this, 'start');
                    this.nextFile();
                }
                else {
                    this.progress = 1;
                    Emit(this, 'complete');
                    resolve();
                }
            });
        }
        nextFile() {
            let limit = this.queue.size;
            if (this.maxParallelDownloads !== -1) {
                limit = Math.min(limit, this.maxParallelDownloads) - this.inflight.size;
            }
            if (limit) {
                const iterator = this.queue.values();
                while (limit > 0) {
                    const file = iterator.next().value;
                    this.inflight.add(file);
                    this.queue.delete(file);
                    file.load()
                        .then((file) => this.fileComplete(file))
                        .catch((file) => this.fileError(file));
                    limit--;
                }
            }
            else if (this.inflight.size === 0) {
                this.stop();
            }
        }
        stop() {
            if (!this.isLoading) {
                return;
            }
            this.isLoading = false;
            Emit(this, 'complete', this.completed);
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
            Emit(this, 'progress', this.progress, totalCompleted, totalQueued);
            this.nextFile();
        }
        fileComplete(file) {
            Emit(this, 'filecomplete', file);
            this.updateProgress(file);
        }
        fileError(file) {
            Emit(this, 'fileerror', file);
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

    function GetConfigValue(config, property, defaultValue) {
        if (Object.prototype.hasOwnProperty.call(config, property)) {
            return config[property];
        }
        else {
            return defaultValue;
        }
    }

    function Install(scene, config = {}) {
        const sceneManager = SceneManagerInstance.get();
        const size = sceneManager.scenes.size;
        const sceneIndex = sceneManager.sceneIndex;
        const firstScene = (size === 0);
        if (typeof config === 'string') {
            scene.key = config;
        }
        else if (config || (!config && firstScene)) {
            scene.key = GetConfigValue(config, 'key', 'scene' + sceneIndex.toString());
        }
        if (sceneManager.scenes.has(scene.key)) {
            console.warn('Scene key already in use: ' + scene.key);
        }
        else {
            sceneManager.scenes.set(scene.key, scene);
            sceneManager.flush = true;
            sceneManager.sceneIndex++;
        }
    }

    class Scene {
        constructor(config) {
            this.game = GameInstance.get();
            this.events = new Map();
            Install(this, config);
        }
    }

    exports.Camera = index$1;
    exports.DOM = index$2;
    exports.Device = index$7;
    exports.Display = index$8;
    exports.Events = index$9;
    exports.Game = Game;
    exports.GameObjects = index$c;
    exports.Input = index$g;
    exports.Loader = Loader;
    exports.Math = index$o;
    exports.Scene = Scene;
    exports.Textures = index$s;
    exports.Time = index$t;
    exports.WebGL1 = index$u;
    exports.WebGLRenderer = WebGLRenderer;
    exports.World = index$w;

})));
//# sourceMappingURL=Phaser4.js.map
