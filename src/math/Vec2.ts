export default class Vec2
{
    /**
     * X component
     *
     * @type {number}
     * @memberof Vec2
     */
    x: number;

    /**
     * Y component
     *
     * @type {number}
     * @memberof Vec2
     */
    y: number;

    /**
     * Creates an instance of a Vector2.
     * 
     * @param {number} [x=0] - X component
     * @param {number} [y=x] - Y component
     * @memberof Vec2
     */
    constructor (x: number = 0, y: number = x)
    {
        this.set(x, y);
    }

    /**
     * Sets the components of this Vector2.
     * 
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @returns {Vec2}
     * @memberof Vec2
     */
    set (x: number = 0, y: number = 0): Vec2
    {
        this.x = x;
        this.y = y;

        return this;
    }
}
