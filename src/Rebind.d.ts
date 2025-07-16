import type { Button, Device } from ".";

export declare class Rebind {
    setRetainInput(callback: (input: Button, sunk: boolean) => boolean): this;
    start(): Promise<Button>;
    withDevices(devices: Device[]): this;
    withoutInputs(inputs: Button[]): this;

    constructor();
}
