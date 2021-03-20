import { Color } from './color';
import { ResponseModule } from './responseModule';

export interface ColorResponseModule extends ResponseModule {
  data: Color[];
}
