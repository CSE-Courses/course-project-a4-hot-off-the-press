import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';

//AUTHOR: Ben Badaszewski, bmbadasz

@Directive({
  selector: '[appQualitydir]',
  providers: [{provide: NG_VALIDATORS, useExisting: QualitydirDirective, multi:true}]
})
export class QualitydirDirective extends Validators {
  validate(control: AbstractControl): {[key: string]: any} | null {
    return valQuality(control);
  }
}

export function valQuality(control: AbstractControl): {[key: string]: any} | null  {
  if (!control.value.match(/[A-F]/)) {
      return { 'QualityValid': true };
  }
  return null;
}