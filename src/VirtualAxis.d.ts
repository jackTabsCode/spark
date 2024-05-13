import type { Button } from ".";

export declare class VirtualAxis<
	T extends { positive?: Button; negative?: Button },
> {
	kind: "VirtualAxis";
	positive?: T["positive"];
	negative?: T["negative"];

	static horizontalArrowKeys(): VirtualAxis<{
		positive: Enum.KeyCode.Right;
		negative: Enum.KeyCode.Left;
	}>;

	static verticalArrowKeys(): VirtualAxis<{
		positive: Enum.KeyCode.Up;
		negative: Enum.KeyCode.Down;
	}>;

	constructor(options: T);
}
