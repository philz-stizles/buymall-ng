import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../core/services/category.service';
import { Category } from '../../../../../core/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
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
    this.categoryService.deleteCategory(id).subscribe(() => {});
  }

  private loadCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
