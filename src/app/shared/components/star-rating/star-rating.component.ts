import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
  <button *ngFor="let star of stars; index as i" (click)="onClick()"></button>
  `,
})
export class StarRatingComponent implements OnInit {
  @Input() private rating!: number;
  @Input('stars') private noOfStars = 5;
  @Input() private disabled = false;
  @Input() private color = 'accent';
  @Output() private ratingChanged = new EventEmitter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  onClick() {}

  showIcon() {}
}

export enum SarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn',
}
