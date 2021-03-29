import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../modules/color';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipePipe implements PipeTransform {

  transform(value: Color[], colorText: string): Color[] {
    colorText = colorText ? colorText.toLocaleLowerCase() : '';
    return colorText
      ? value.filter(
          (c: Color) => c.colorName.toLocaleLowerCase().indexOf(colorText) !== -1
        )
      : value;
  }

}
