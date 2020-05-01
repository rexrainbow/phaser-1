import { Key } from '../Key';
import { Keyboard } from '../Keyboard';

export type ArrowKeysConfig = {
    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
    space: boolean;
};

export class ArrowKeys
{
    left: Key;
    right: Key;
    up: Key;
    down: Key;
    space: Key;

    constructor (keyboardManager: Keyboard, config?: ArrowKeysConfig)
    {
        const {
            left = true,
            right = true,
            up = true,
            down = true,
            space = true
        } = config;

        if (left)
        {
            this.left = new Key('ArrowLeft');

            keyboardManager.keys.set(this.left.value, this.left);
        }

        if (right)
        {
            this.right = new Key('ArrowRight');

            keyboardManager.keys.set(this.right.value, this.right);
        }

        if (up)
        {
            this.up = new Key('ArrowUp');

            keyboardManager.keys.set(this.up.value, this.up);
        }

        if (down)
        {
            this.down = new Key('ArrowDown');

            keyboardManager.keys.set(this.down.value, this.down);
        }

        if (space)
        {
            this.space = new Key(' ');

            keyboardManager.keys.set(this.space.value, this.space);
        }
    }
}
