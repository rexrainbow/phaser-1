import ISceneConfig from './ISceneConfig';

export default function GetConfigValue<T = unknown>(config: ISceneConfig, property: string, defaultValue: T): T
{
    if (config.hasOwnProperty(property))
    {
        return config[property];
    }
    else
    {
        return defaultValue;
    }
}
