import ISceneConfig from './ISceneConfig';

export default function GetConfigValue<Property extends keyof ISceneConfig>(config: ISceneConfig, property: Property, defaultValue: ISceneConfig[Property]): ISceneConfig[Property]
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
