import { Customer } from './customer';
import { ResponseModule } from './responseModule';

export interface CustomerResponseModule extends ResponseModule {
  data: Customer[];
}
