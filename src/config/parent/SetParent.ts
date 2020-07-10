import { CONFIG_DEFAULTS } from '../const';
import { ConfigStore } from '../ConfigStore';
import { GetElement } from '../../dom/GetElement';

export function SetParent (parentElement?: string | HTMLElement): void
{
    //  If this function was called and `null` *wasn't* given as the parent
    //  then we try to figure it out, or fallback to the document body
    if (parentElement)
    {
        ConfigStore.set(CONFIG_DEFAULTS.PARENT, GetElement(parentElement));
    }
}
