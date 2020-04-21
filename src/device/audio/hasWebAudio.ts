export function HasWebAudio (): boolean
{
    return (
        Object.prototype.hasOwnProperty.call(window, 'AudioContext') ||
        Object.prototype.hasOwnProperty.call(window, 'webkitAudioContext')
    );
}
