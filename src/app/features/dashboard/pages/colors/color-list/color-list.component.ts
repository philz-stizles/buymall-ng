import { Component, OnInit } from '@angular/core';
import { Color } from '../../../../../core/models/color.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from '../../../../../core/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrl: './color-list.component.scss',
})
export class ColorListComponent implements OnInit {
  colors: Color[] = [];

  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  onNavigateToCreate() {
    this.router.navigate(['upsert'], { relativeTo: this.activatedRoute });
  }

  onNavigateToEdit(id: string) {
    this.router.navigate(['upsert', id], { relativeTo: this.activatedRoute });
  }

  onNavigateToDetails(id: string) {
    this.router.navigate(['upsert', id], { relativeTo: this.activatedRoute });
  }

  onDelete(id: string) {
    this.colorService.deleteColor(id).subscribe(() => {});
  }

  private loadCategories() {
    this.colorService.getColors().subscribe((colors) => {
      this.colors = colors;
    });
  }
}
