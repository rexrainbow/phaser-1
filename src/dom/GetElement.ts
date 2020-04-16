/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Attempts to get the target DOM element based on the given value, which can be either
 * a string, in which case it will be looked-up by ID, or an element node. If nothing
 * can be found it will return a reference to the document.body.
 *
 * @function Phaser.DOM.GetElement
 * @since 4.0.0
 *
 * @param {(string | HTMLElement)} [target] - The DOM element to look-up.
 * 
 * @returns {HTMLElement} The HTML Element that was found.
 */
export default function GetElement (target?: string | HTMLElement): HTMLElement
{
    let element: HTMLElement;

    if (target)
    {
        if (typeof target === 'string')
        {
            //  Hopefully an element ID
            element = document.getElementById(target);
        }
        else if (typeof target === 'object' && target.nodeType === 1)
        {
            //  Quick test for a HTMLElement
            element = target;
        }
    }

    if (!element)
    {
        element = document.body;
    }

    return element;
}
