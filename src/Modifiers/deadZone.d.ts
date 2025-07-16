import { Modifier } from "..";

declare type deadZone = (
    kind: "Radial" | "Axial",
    lowerThreshold: number
) => Modifier;
export = deadZone;
