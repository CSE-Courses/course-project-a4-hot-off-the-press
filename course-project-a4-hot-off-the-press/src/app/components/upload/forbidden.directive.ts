import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbidden]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi:true}]
})
export class ForbiddenValidatorDirective implements Validator{
  @Input('appForbidden') forbidden:string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbidden ? forbiddenValidator(new RegExp(this.forbidden, 'i'))(control): null;
  }

}

export function forbiddenValidator (nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };

}
