This is a fork of https://github.com/nezuo/spark with typings.
Originally from https://github.com/sporblord/spark.

# Spark

Spark is an input-action manager for Roblox.

## Features

-   Supports button, 1D, and 2D inputs.
-   Create virtual 1D/2D inputs using `VirtualAxis1d`/`VirtualAxis2d`.
-   Store all your input mappings in a single `InputMap` object.
-   Rebind inputs using APIs like `InputMap.insert` and `InputMap.remove`.

## Example

```ts
const actions = new Actions(["attack", "move"]);

actions.justPressedSignal("attack").Connect(() => {
    print("Attacked!");
});

RunService.Heartbeat.Connect(() => {
    print("Moved", actions.clampedAxis2d("move"));
});
```

To get started, visit the [docs](https://nezuo.github.io/spark).
