import type { Input2d } from ".";

export declare class Multiply2d {
	kind: "Multiply2d";
	input: Input2d;
	multiplier: Vector2;

	constructor(input: Input2d, multiplier: Vector2);
}
