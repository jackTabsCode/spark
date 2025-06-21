import { Device, Input } from ".";
import { Bindings } from "./Binding/Bindings";
import type { InputState } from "./InputState";
import type { Signal } from "./Signal";

export declare class Actions<T extends string | number> {
    axis(action: T): number;
    axis2d(action: T): Vector2;
    clampedAxis2d(action: T): Vector2;
    getInputsByDevices(action: T, devices: Device[]): Input[];
    justPressedSignal(action: T): Signal;
    justReleasedSignal(action: T): Signal;
    moveAxis(action: T, value: number): void;
    moveAxis2d(action: T, vector2: Vector2): void;
    normalizedAxis2d(action: T): Vector2;
    pressed(action: T): boolean;
    rebuildBindings(): void;
    released(action: T): boolean;
    removeAssociatedGamepad(): void;
    setAssociatedGamepad(gamepad: Enum.UserInputType): void;
    setRebuildBindings(rebuildBindings: (bindings: Bindings<T>) => void): this;
    update(inputState: InputState): void;

    constructor(actions: readonly T[]);
}
