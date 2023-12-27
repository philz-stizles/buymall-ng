import { Component, EventEmitter, Input, Output } from '@angular/core';

type Size = 'sm' | 'md' | 'lg';
type Variant =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'success'
  | 'warning'
  | 'danger'
  | 'flat';

@Component({
  selector: 'app-button',
  template: `
    <button
      (click)="onClick()"
      [ngClass]="{
      expanded: expanded,
      lg: size === 'lg',
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
  @Input() variant: Variant = 'primary';
  @Input() isLoading = false;
  @Input() expanded = false;
  @Output('click') clicked = new EventEmitter();

  onClick = () => {
    this.clicked.emit();
  };
}
