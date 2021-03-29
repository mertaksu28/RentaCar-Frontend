import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../modules/car';

@Pipe({
  name: 'carPipe',
})
export class CarPipePipe implements PipeTransform {
  transform(value: Car[], carText: string): Car[] {
    carText = carText ? carText.toLocaleLowerCase() : '';
    return carText
      ? value.filter(
          (c: Car) => c.description.toLocaleLowerCase().indexOf(carText) !== -1
        )
      : value;
  }
}
