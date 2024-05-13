import type { Device, Input } from ".";

export declare class InputMap<T = string> {
	static deserialize(seralized: buffer): InputMap;

	clone(): InputMap;
	get(action: T): Input[];
	getByDevices(action: T, devices: Device[]): Input[];
	insert(action: T, ...inputs: Input[]): InputMap<T>;
	remove(action: T, input: Input): void;
	serialize(): buffer;

	constructor();
}
