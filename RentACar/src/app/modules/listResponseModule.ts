import { ResponseModule } from './responseModule';

export interface ListResponseModule<T> extends ResponseModule {
  data: T[];
}
