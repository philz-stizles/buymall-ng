import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  template: `
    <div class="stat-card">
      <div class="body">
        <h6 class="label">{{ label }}</h6>
        <div class="meta">
          <mat-icon
            aria-hidden="false"
            aria-label="Category icon"
            fontIcon="local_mall"
          ></mat-icon>
          <div class="">+2.6%</div>
        </div>
        <h3 class="stat">18,765</h3>
      </div>
      <mat-icon
        class="icon"
        aria-hidden="false"
        aria-label="Category icon"
        fontIcon="signal_cellular_alt"
      ></mat-icon>
    </div>
  `,
  styleUrl: './stat-card.component.scss',
})
export class StatCardComponent {
  @Input() label!: string;
  @Input() stats!: string;
}
