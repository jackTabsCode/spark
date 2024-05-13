export declare class Signal<T extends unknown[] = []> {
	private connections: RBXScriptConnection[];

	fire(): void;
	connect(callback: (...args: T) => void): () => void;
}
