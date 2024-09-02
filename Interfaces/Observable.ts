import {Observer} from "./Observer";

export interface Observable {
    add(observer: Observer) : void;
    remove(observer: Observer): void;
    notify(): void
}