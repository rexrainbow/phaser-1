import { IKey } from './IKey';
export declare class Key implements IKey {
    readonly value: string;
    capture: boolean;
    isDown: boolean;
    enabled: boolean;
    repeatRate: number;
    canRepeat: boolean;
    timeDown: number;
    timeUpdated: number;
    timeUp: number;
    downCallback: (key: IKey) => void;
    upCallback: (key: IKey) => void;
    constructor(value: string);
    getValue(): string;
    down(event: KeyboardEvent): void;
    up(event: KeyboardEvent): void;
    reset(): void;
    destroy(): void;
}
//# sourceMappingURL=Key.d.ts.map