import { Input, Modifier } from "..";

export declare class Bind {
    addModifiers: (...modifiers: Modifier[]) => Bind;

    constructor(...inputs: Input[]);
}
