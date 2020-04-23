import { IsNode } from './IsNode';

export function IsElectron (): boolean
{
    return (IsNode() && !!(process.versions as Record<string, any>).hasOwnProperty('electron'));
}
