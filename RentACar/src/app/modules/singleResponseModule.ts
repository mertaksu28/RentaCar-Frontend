import { ResponseModule } from "./responseModule";

export interface SingleResponseModule<T> extends ResponseModule {
    data: T
}