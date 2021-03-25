import { ResponseModule } from './responseModule';

export interface ObjectResponseModule<T> extends ResponseModule {
  data: T;
}
