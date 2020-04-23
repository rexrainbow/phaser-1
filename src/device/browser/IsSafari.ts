import { IsWindowsPhone } from '../os/IsWindowsPhone';

export function IsSafari (): { safari: boolean; safariVersion: number }
{
    const ua: string = navigator.userAgent;

    const safari = (ua.includes('Safari') && !isWindowsPhone());
    const safariVersion = ((/Version\/(\d+)\./).test(ua)) ? parseInt(RegExp.$1, 10) : 0;

    return {
        safari,
        safariVersion
    };
}
