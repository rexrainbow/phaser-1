interface IGetIOSResult
{
    iOS: boolean;
    iOSVersion: number;
    iPhone: boolean;
    iPad: boolean;
}

export function IsiOS (): IGetIOSResult
{
    const ua: string = navigator.userAgent;

    const result: IGetIOSResult = {
        iOS: false,
        iOSVersion: 0,
        iPhone: false,
        iPad: false
    };

    if ((/iP[ao]d|iPhone/i).test(ua))
    {
        (navigator.appVersion).match(/OS (\d+)/);

        result.iOS = true;
        result.iOSVersion = parseInt(RegExp.$1, 10);
        result.iPhone = (ua.toLowerCase().includes('iphone'));
        result.iPad = (ua.toLowerCase().includes('ipad'));
    }

    return result;
}
