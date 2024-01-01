import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../../../../../core/services/sub-category.service';
import { SubCategory } from '../../../../../core/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrl: './sub-category-list.component.scss',
})
export class SubCategoryListComponent implements OnInit {
  subCategories: SubCategory[] = [];

  constructor(
    private subCategoryService: SubCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSubCategories();
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
    this.subCategoryService.delete(id).subscribe(() => {});
  }

  private loadSubCategories() {
    this.subCategoryService.getSubCategories().subscribe((subCategories) => {
      this.subCategories = subCategories;
    });
  }
}
