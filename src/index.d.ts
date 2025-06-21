import { ActionConfig } from "./Binding/ActionConfig";
import { Bind } from "./Binding/Bind";
import { Bindings } from "./Binding/Bindings";
import { Actions } from "./Actions";
import { InputState } from "./InputState";
import { Rebind } from "./Rebind";
import { VirtualAxis } from "./VirtualAxis";
import { VirtualAxis2d } from "./VirtualAxis2d";
import scale from "./Modifiers/scale";
import deadZone from "./Modifiers/deadZone";
import getDeviceFromInput from "./getDeviceFromInput";

export type Button = Enum.KeyCode | Enum.UserInputType;

export type Input = Button | VirtualAxis<object> | VirtualAxis2d<object>;

export type Modifier = (
    pressed: boolean,
    axis: number,
    axis2d: Vector2
) => LuaTuple<[boolean, number, Vector2]>;

export type Device = "Keyboard" | "Mouse" | "Gamepad";

declare const Modifiers: {
    scale: scale;
    deadZone: deadZone;
};

export {
    Modifiers,
    ActionConfig,
    Bind,
    Bindings,
    Actions,
    InputState,
    Rebind,
    VirtualAxis,
    VirtualAxis2d,
    getDeviceFromInput,
};
