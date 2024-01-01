import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Size, Variant } from '../../types';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="button"
      type="{{ type }}"
      [disabled]="disabled || (form && form.invalid)"
      (click)="onClick()"
      [ngClass]="{
      expanded: expanded,
      lg: size === 'lg',
      sm: size === 'sm',
    }"
    >
      <ng-content></ng-content><span>{{ label }}</span>
    </button>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() size: Size = 'sm';
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() variant: Variant = 'primary';
  @Input() isLoading = false;
  @Input() disabled = false;
  @Input() expanded = false;
  @Input() form: FormGroup | null = null; // Accept FormGroup as input
  @Output('onClick') clicked = new EventEmitter();

  onClick = () => {
    this.clicked.emit();
  };
}
