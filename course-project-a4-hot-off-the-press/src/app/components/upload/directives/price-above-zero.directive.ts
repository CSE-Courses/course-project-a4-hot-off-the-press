import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';

@Directive({
  selector: '[appPriceAboveZero]',
  providers: [{provide: NG_VALIDATORS, useExisting: PriceAboveZeroDirective, multi:true}]

})
export class PriceAboveZeroDirective extends Validators {
  validate(control: AbstractControl): {[key: string]: any} | null {
    return valSpecChar(control);
  }
}

export function valSpecChar(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value <= 0) {
      return { 'negative': true };
  }
  return null;
}