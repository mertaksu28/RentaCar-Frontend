import { Rental } from './rental';
import { ResponseModule } from './responseModule';

export interface RentalResponseModule extends ResponseModule {
  data: Rental[];
}
