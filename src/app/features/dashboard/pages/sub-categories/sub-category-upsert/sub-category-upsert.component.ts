import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { SubCategory } from '../../../../../core/models/category.model';
import { SubCategoryService } from '../../../../../core/services/sub-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subCategory-upsert',
  templateUrl: './sub-category-upsert.component.html',
  styleUrl: './sub-category-upsert.component.scss',
})
export class SubCategoryUpsertComponent implements OnInit, AfterViewInit {
  @ViewChild('name', { static: false }) nameRef!: ElementRef;
  @ViewChild('description', { static: false }) descriptionRef!: ElementRef;
  isLoading = false;
  error: string | null = null;
  selectedSubCategory?: SubCategory;

  constructor(
    private subCategoryService: SubCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const subCategoryId = params['id']; // If id must be a number, then +params['id']
      if (subCategoryId) {
        const subCategory = this.subCategoryService.getSubCategory(subCategoryId);
        this.selectedSubCategory = subCategory;
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.selectedSubCategory) {
      this.initForm(this.selectedSubCategory);
    }
  }

  isEditMode() {
    return !!this.selectedSubCategory;
  }

  onSubmit() {
    this.isLoading = true;
    this.error = null;

    let upsertObservable: Observable<Object>; //

    const subCategory = {
      name: (this.nameRef.nativeElement as HTMLInputElement).value,
      description: (this.descriptionRef.nativeElement as HTMLInputElement)
        .value,
      category: ''
    };

    if (this.isEditMode()) {
      upsertObservable = this.subCategoryService.update(
        this.selectedSubCategory?.id!,
        subCategory
      );
    } else {
      upsertObservable = this.subCategoryService.create(subCategory);
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
        this.resetForm();
      },
    });
  }

  private initForm(subCategory?: SubCategory) {
    if (subCategory) {
      (this.nameRef.nativeElement as HTMLInputElement).value = subCategory.name;
      (this.descriptionRef.nativeElement as HTMLInputElement).value =
        subCategory.description ?? '';
    }
  }

  private resetForm() {
    (this.nameRef.nativeElement as HTMLInputElement).value = '';
    (this.descriptionRef.nativeElement as HTMLInputElement).value = '';
  }
}
