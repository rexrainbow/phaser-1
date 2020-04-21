export function HasAudio (): boolean
{
    return Object.prototype.hasOwnProperty.call(window, 'Audio');
}
