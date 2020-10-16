import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appSpecChar]',
  providers: [{provide: NG_VALIDATORS, useExisting: SpecCharDirective, multi:true}]
})
export class SpecCharDirective {
  validate(control: AbstractControl): {[key: string]: any} | null {
    return valSpecChar(control);
  }
}

export function valSpecChar(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value.match(/\W|_/g)) {
      return { 'specChar': true };
  }
  return null;
}