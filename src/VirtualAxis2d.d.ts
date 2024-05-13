import type { Button } from ".";

export declare class VirtualAxis2d<
	T extends { up?: Button; down?: Button; left?: Button; right?: Button },
> {
	kind: "VirtualAxis2d";
	up?: T["up"];
	down?: T["down"];
	left?: T["left"];
	right?: T["right"];

	static arrowKeys(): VirtualAxis2d<{
		up: Enum.KeyCode.Up;
		down: Enum.KeyCode.Down;
		left: Enum.KeyCode.Left;
		right: Enum.KeyCode.Right;
	}>;

	static dPad(): VirtualAxis2d<{
		up: Enum.KeyCode.DPadUp;
		down: Enum.KeyCode.DPadDown;
		left: Enum.KeyCode.DPadLeft;
		right: Enum.KeyCode.DPadRight;
	}>;

	static wasd(): VirtualAxis2d<{
		up: Enum.KeyCode.W;
		down: Enum.KeyCode.D;
		left: Enum.KeyCode.A;
		right: Enum.KeyCode.S;
	}>;

	constructor(options: T);
}
