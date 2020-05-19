export const DIRTY_CONST = {

    CLEAR: 0,
    TRANSFORM: 1,
    UPDATE: 2,
    CHILD_CACHE: 4,
    POST_RENDER: 8,
    COLORS: 16,
    BOUNDS: 32,
    TEXTURE: 64,
    FRAME: 128,
    ALPHA: 256,
    CHILD: 512,

    //  Special combinations
    DEFAULT: 1 + 2 + 16 + 32,

    //  Reserved for future use:
    //  1024
    //  2048
    //  4096
    //  8192
    //  16384
    //  32768
    //  65536
    //  131072
    //  262144
    //  524288
    //  1048576
    //  2097152
    //  4194304
    //  8388608
    //  16777216
    //  33554432
    //  67108864
    //  134217728
    //  268435456

    //  Reserved for user use
    USER1: 536870912,
    USER2: 1073741824,
    USER3: 2147483648,
    USER4: 4294967296

};
