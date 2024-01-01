import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../../core/models/category.model';
import { CategoryService } from '../../../../../core/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-upsert',
  templateUrl: './category-upsert.component.html',
  styles: [],
})
export class CategoryUpsertComponent implements OnInit {
  categoryForm!: FormGroup;
  isLoading = false;
  error: string | null = null;
  selectedCategory?: Category;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const categoryId = params['id']; // If id must be a number, then +params['id']
      if (categoryId) {
        this.categoryService
          .getCategory(categoryId)
          .pipe(take(1))
          .subscribe((category) => {
            if (!!category) {
              this.selectedCategory = category;
              this.initForm(this.selectedCategory);
            }
          });
      } else {
        this.initForm();
      }
    });
  }

  isEditMode() {
    return !!this.selectedCategory;
  }

  get subCategoryControls() {
    return (this.categoryForm.get('subCategories') as FormArray).controls;
  }

  onAddSubCategory() {
    (this.categoryForm.get('subCategories') as FormArray).push(
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [
          Validators.max(10),
          Validators.max(40),
        ]),
      })
    );
  }

  onRemoveSubCategory(index: number) {
    (this.categoryForm.get('subCategories') as FormArray).removeAt(index);
  }

  onSubmit() {
    this.isLoading = true;
    this.error = null;

    // const newCategory = {
    //   this.categoryForm.value['name'],
    //   this.categoryForm.value['description'],
    //   this.categoryForm.value['subCategories']
    // }

    let upsertObservable: Observable<Object>;

    if (this.isEditMode()) {
      upsertObservable = this.categoryService.update(
        this.selectedCategory?.id!,
        this.categoryForm.value
      );
    } else {
      upsertObservable = this.categoryService.create(this.categoryForm.value);
    }

    upsertObservable.subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate([this.isEditMode() ? '../..' : '../'], {
          relativeTo: this.activatedRoute,
        });
      },
      error: (err) => {
        this.error = err.message || 'An error occurred';
        this.isLoading = false;
      },
      complete: () => {
        this.categoryForm.reset();
      },
    });
  }

  hasError(path: string) {
    const control = this.categoryForm.get(path);
    return control?.invalid && control?.dirty;
  }

  private initForm(category?: Category) {
    let name = '';
    let description = '';
    let isPublished = false;
    let subCategories = new FormArray<FormGroup>([]);

    if (!!category) {
      name = category.name;
      description = category.description ?? '';
      isPublished = category.isPublished;
      if (category.subCategories && category.subCategories.length > 0) {
        category.subCategories.forEach((subCategory) => {
          subCategories.push(
            new FormGroup({
              name: new FormControl(subCategory.name, [Validators.required]),
              description: new FormControl(subCategory.description, [
                Validators.max(10),
                Validators.max(40),
              ]),
            })
          );
        });
      }
    }

    this.categoryForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      description: new FormControl(description, [
        Validators.max(10),
        Validators.max(40),
      ]),
      isPublished: new FormControl(isPublished, [Validators.required]),
      subCategories,
    });
  }
}
