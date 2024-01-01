import { ColorService } from './../../../../../core/services/color.service';
import { ProductService } from '../../../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SizeService } from '../../../../../core/services/size.service';
import { CategoryService } from '../../../../../core/services/category.service';
import { Color } from '../../../../../core/models/color.model';
import { Category } from '../../../../../core/models/category.model';
import { Size } from '../../../../../core/models/size.model';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.scss',
})
export class ProductUpsertComponent implements OnInit {
  productForm!: FormGroup;
  selectedProductId?: string;
  colors: Color[] = [];
  sizes: Size[] = [];
  categories: Category[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private productsService: ProductService,
    private categoryService: CategoryService,
    private colorService: ColorService,
    private sizeService: SizeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadSelectOptions();
    this.activeRoute.params.subscribe((params: Params) => {
      const id = params['id'] as string | undefined;
      if (id) {
        this.selectedProductId = id;
      }
      this.initializeForm(id);
    });
  }

  onSubmit = () => {
    this.isLoading = true;
    this.error = null;
    // const newProduct = {};

    let upsertObservable: Observable<Object>;

    if (this.isEditMode()) {
      upsertObservable = this.productsService.update(
        this.selectedProductId!,
        this.productForm.value
      );
    } else {
      upsertObservable = this.productsService.create(this.productForm.value);
    }

    upsertObservable.subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard/products']);
      },
      error: () => {
        this.error = '';
        this.isLoading = false;
      },
      complete: () => {
        this.productForm.reset();
      },
    });
  };

  private isEditMode = () => !!this.selectedProductId;

  private initializeForm = (id?: string) => {
    let name = '';
    let code = '';
    let sku = '';
    let description = '';
    let category = '';
    let subcategory = '';
    let quantity = 0;
    let price = {
      regular: 0.0,
      sale: 0.0,
      tax: 0.0,
    };
    let isPublished = false;
    let color = '';
    let size = '';

    if (id) {
      this.productsService.getProduct(id).subscribe((product) => {
        if (product) {
          name = product.name;
          description = product.description;
          category = product.category;
          subcategory = product.subcategory ?? subcategory;
          quantity = product.quantity;
          code = product.code ?? code;
          sku = product.sku ?? sku;
          price = {
            regular: product.price.regular,
            sale: product.price.sale ?? 0.0,
            tax: product.price.tax ?? 0.0,
          };
          // price = product.price.toFixed(2);
          isPublished = product.isPublished;
        }
      });
    }
    this.productForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      code: new FormControl(code),
      sku: new FormControl(sku),
      description: new FormControl(description, Validators.required),
      quantity: new FormControl(quantity, Validators.required),
      color: new FormControl(color),
      size: new FormControl(size),
      price: new FormGroup({
        regular: new FormControl(price.regular, [
          Validators.required,
          Validators.min(1),
        ]),
        sale: new FormControl(price.sale, Validators.min(1)),
        tax: new FormControl(price.tax, [
          Validators.min(1),
          Validators.min(100),
        ]),
      }),
      isPublished: new FormControl(isPublished, Validators.required),
      category: new FormControl(category, Validators.required),
      subcategory: new FormControl(subcategory),
    });
  };

  private loadSelectOptions() {
    forkJoin({
      colors: this.colorService.getColors(),
      sizes: this.sizeService.getSizes(),
      categories: this.categoryService.getCategories(),
    }).subscribe((results) => {
      this.colors = results.colors;
      this.sizes = results.sizes;
      this.categories = results.categories;
    });
  }
}
