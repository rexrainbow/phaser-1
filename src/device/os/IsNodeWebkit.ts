import { IsNode } from './IsNode';

export function IsNodeWebkit (): boolean
{
    return (IsNode() && !!(process.versions as Record<string, any>).hasOwnProperty('node-webkit'));
}
