import { isNode } from './isNode';

export function isElectron (): boolean
{
    return (isNode() && !!(process.versions as Record<string, any>).hasOwnProperty('electron'));
}
