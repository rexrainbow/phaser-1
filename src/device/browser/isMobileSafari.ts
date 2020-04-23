import { isiOS } from '../os/isiOS';

export function isMobileSafari (): { mobileSafari: boolean }
{
    const { iOS } = isiOS();

    const mobileSafari = (navigator.userAgent.includes('AppleWebKit') && iOS);

    return {
        mobileSafari
    };
}
