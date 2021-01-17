import { v4 } from "uuid";

export function IdInject<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        id = v4();
    };
}