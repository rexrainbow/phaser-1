import { Loader } from './Loader';

export function GetURL (key: string, url: string, extension: string, loader?: Loader): string
{
    if (!url)
    {
        url = key + extension;
    }

    if ((/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/).exec(url))
    {
        return url;
    }
    else if (loader)
    {
        return loader.baseURL + loader.path + url;
    }
    else
    {
        return url;
    }
}
