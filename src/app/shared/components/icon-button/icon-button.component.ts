import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Size, Variant } from '../../types';

@Component({
  selector: 'app-icon-button',
  template: `
    <button
      class="button"
      type="{{ type }}"
      [disabled]="disabled"
      (click)="onClick()"
      [ngClass]="{
      lg: size === 'lg',
      sm: size === 'sm',
    }"
    >
      <span class="material-symbols-outlined"> {{ icon }} </span>
    </button>
  `,
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input() icon!: string;
  @Input() size: Size = 'sm';
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() variant: Variant = 'primary';
  @Input() isLoading = false;
  @Input() disabled = false;
  @Output('onClick') clicked = new EventEmitter<void>();

  onClick = () => {
    this.clicked.emit();
  };
}
