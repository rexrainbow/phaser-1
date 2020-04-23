export function isMacOS (): boolean
{
    const ua: string = navigator.userAgent;

    return (ua.includes('Mac OS') && !(ua.includes('like Mac OS')));
}
