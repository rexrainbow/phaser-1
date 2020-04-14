export default function GetConfigValue(config, property, defaultValue) {
    if (config.hasOwnProperty(property)) {
        return config[property];
    }
    else {
        return defaultValue;
    }
}
//# sourceMappingURL=GetConfigValue.js.map