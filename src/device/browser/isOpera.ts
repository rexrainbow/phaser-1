export function isOpera (): { opera: boolean }
{
    const opera = navigator.userAgent.includes('Opera');

    return {
        opera
    };
}
