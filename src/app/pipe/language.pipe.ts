import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeLang'
})
export class LanguagePipe implements PipeTransform {

  transform(_Value: string, _Obj: any) {
    return !_Obj || !_Obj[_Value] ? _Value : _Obj[_Value];
  }

}
