import { Actions } from "./Actions";
import { InputMap } from "./InputMap";
import { InputState } from "./InputState";
import { Multiply2d } from "./Multiply2d";
import { Rebind } from "./Rebind";
import { VirtualAxis } from "./VirtualAxis";
import { VirtualAxis2d } from "./VirtualAxis2d";

export type Button = Enum.KeyCode | Enum.UserInputType;

export type Input =
	| Enum.KeyCode
	| Enum.UserInputType
	| VirtualAxis<object>
	| VirtualAxis2d<object>
	| Multiply2d;

export type Input2d = Enum.UserInputType | VirtualAxis2d<object> | Enum.KeyCode;

export type Device = "Keyboard" | "Mouse" | "Gamepad";

export {
	Actions,
	InputMap,
	InputState,
	Rebind,
	VirtualAxis,
	VirtualAxis2d,
	Multiply2d,
};
