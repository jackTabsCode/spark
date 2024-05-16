import type { InputMap } from "./InputMap";
import type { InputState } from "./InputState";
import type { Signal } from "./Signal";

export declare class Actions<T extends string | number> {
	axis2d(action: T): Vector2;
	clampedAxis2d(action: T): Vector2;
	hold(action: T): () => void;
	justPressedSignal(action: T): Signal;
	justReleasedSignal(action: T): Signal;
	move(action: T, vector2: Vector2): Vector2;
	normalizedAxis2d(action: T): Vector2;
	pressed(action: T): boolean;
	released(action: T): boolean;
	update(inputState: InputState, inputMap: InputMap<T>): void;
	value(action: T): number;

	constructor(actions: readonly T[]);
}
