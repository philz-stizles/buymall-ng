import { ProductService } from '../../../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.scss',
})
export class ProductUpsertComponent implements OnInit {
  productForm!: FormGroup;
  selectedProductId?: string;

  constructor(
    private productsService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      const id = params['id'] as string | undefined;
      if (id) {
        this.selectedProductId = id;
      }
      this.initializeForm(id);
    });
  }

  onSubmit = () => {
    this.productsService.createProduct(this.productForm.value).subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.activeRoute });
    });
  };

  private initializeForm = (id?: string) => {
    let name = '';
    let description = '';
    let price = '0.00';
    let isPublished = '';

    if (id) {
      const selectedProduct = this.productsService.getProduct(id);
      if (selectedProduct) {
        name = selectedProduct.name;
        description = selectedProduct.description;
        price = selectedProduct.price.toFixed(2);
        isPublished = selectedProduct.isPublished.toString();
      }
    }
    this.productForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      price: new FormControl(price, Validators.required),
      isPublished: new FormControl(isPublished, Validators.required),
      category: new FormControl('', Validators.required),
    });
  };
}
