import { Input } from "..";
import { ActionConfig } from "./ActionConfig";
import { Bind } from "./Bind";

export declare class Bindings<T extends string | number> {
    bind: (action: T, ...args: (Input | Bind)[]) => ActionConfig;
}
