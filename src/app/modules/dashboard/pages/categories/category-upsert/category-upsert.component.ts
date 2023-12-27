import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category-upsert',
  templateUrl: './category-upsert.component.html',
  styleUrl: './category-upsert.component.scss',
})
export class CategoryUpsertComponent {
  @ViewChild('name', { static: false }) name!: ElementRef;
  @ViewChild('description', { static: false }) description!: ElementRef;
}
