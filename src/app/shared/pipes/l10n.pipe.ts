import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'l10n'
})
export class L10nPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
