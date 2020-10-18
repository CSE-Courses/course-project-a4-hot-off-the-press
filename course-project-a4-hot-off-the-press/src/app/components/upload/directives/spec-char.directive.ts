import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';

//AUTHOR: Ben Badaszewski, bmbadasz

@Directive({
  selector: '[appSpecChar]',
  providers: [{provide: NG_VALIDATORS, useExisting: SpecCharDirective, multi:true}]
})
export class SpecCharDirective extends Validators{
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