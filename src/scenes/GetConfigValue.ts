import { ISceneConfig } from './ISceneConfig';

export function GetConfigValue<Property extends keyof ISceneConfig> (config: ISceneConfig, property: Property, defaultValue: ISceneConfig[Property]): ISceneConfig[Property]
{
    if (Object.prototype.hasOwnProperty.call(config, property))
    {
        return config[property];
    }
    else
    {
        return defaultValue;
    }
}
