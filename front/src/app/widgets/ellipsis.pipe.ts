import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: unknown, maxLength = 10): string {
    if (typeof value !== 'string') {
      throw new Error(
        'Ellipsis pipe cannot be applied on a input which is not a string.'
      );
    }
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...';
    }
    return value;
  }
}
