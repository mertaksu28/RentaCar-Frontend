import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../modules/brand';

@Pipe({
  name: 'brandPipe'
})
export class BrandPipePipe implements PipeTransform {

  transform(value: Brand[], brandText: string): Brand[] {
    brandText = brandText ? brandText.toLocaleLowerCase() : '';
    return brandText
      ? value.filter(
          (b: Brand) => b.brandName.toLocaleLowerCase().indexOf(brandText) !== -1
        )
      : value;
  }
}
