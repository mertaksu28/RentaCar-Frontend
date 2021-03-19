import { Car } from "./car";
import { ResponseModule } from "./responseModule";

export interface CarResponseModule extends ResponseModule {
    data:Car[]
}