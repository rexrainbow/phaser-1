import { isNode } from './isNode';

export function isNodeWebkit (): boolean
{
    return (isNode() && !!(process.versions as Record<string, any>).hasOwnProperty('node-webkit'));
}
