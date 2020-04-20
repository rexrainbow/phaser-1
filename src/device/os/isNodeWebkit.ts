import { isNode } from './isNode';

export function isNodeWebkit (): boolean
{
    return (isNode() && !!(process.versions as Object).hasOwnProperty('node-webkit'));
}
