import {
  Component,
  Input,
  forwardRef,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent
  implements ControlValueAccessor, Validator, OnInit
{
  @Input() id!: string;
  @Input() label!: string;
  formControl: FormControl = new FormControl<string>('');

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(tap((value) => this.onChange(value)))
      .subscribe();
  }

  onChange: (value: string) => void = noop;

  onTouch: () => void = noop;

  writeValue(value: string): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!control.value || control.value === '') {
      return { required: true };
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    // this.validate = fn;
  }
}
