import { Brand } from './brand';
import { ResponseModule } from './responseModule';

export interface BrandResponseModule extends ResponseModule {
  data: Brand[];
}
