import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class MapToIterable implements PipeTransform {
  transform( value): any {
    if ( !value ) {
      return value;
    }

    let keys: any = [];
    for ( let key in value ) {
      keys.push({ key: key, value: value[ key ] });
    }
    return keys;
  }
}
