import type { Button, Device } from ".";

export declare class Rebind {
	start(): Promise<Button>;
	withDevices(devices: Device[]): Rebind;
	withoutInputs(inputs: Button[]): Rebind;

	constructor();
}
