export function isSilk (): { silk: boolean }
{
    const silk = navigator.userAgent.includes('Silk');

    return {
        silk
    };
}
