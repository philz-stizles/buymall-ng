import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../../core/services/products.service';
import { Product } from '../../../../../core/models/product.model';

@Component({
  selector: 'app-best-sellers',
  template: `
    <section class="best-sellers bg-gray-3 pt-10 pb-10">
      <div class="container-xl mx-auto px-4">
        <div class="section-title flex-row justify-between mb-6">
          <h2 class="title text-2xl font-semibold">Best-Seller Products</h2>
          <div class="flex">
            <div class="tabs flex-row wrap gap-3">
              <a
                class="active tab-item text-sm"
                href="#product-1"
                data-toggle="tab"
                >All
              </a>
              <a class="tab-item text-sm" href="#product-2" data-toggle="tab">
                Clothings
              </a>
              <a class="tab-item text-sm" href="#product-3" data-toggle="tab"
                >Bags
              </a>
              <a class="tab-item text-sm" href="#product-4" data-toggle="tab">
                Shoes</a
              >
              <a class="tab-item text-sm" href="#product-5" data-toggle="tab">
                Accessories</a
              >
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-2">
          <app-product-card
            *ngFor="let product of bestSellers"
            [product]="product"
          ></app-product-card>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .best-sellers {
        .section-title {
          .title {
            letter-spacing: -0.25px;
            line-height: 1;
            margin: 0;
          }
        }

        .tabs {
          .tab-item {
            color: #999999;

            &.active {
              color: #000;
            }
          }
        }
      }
    `,
  ],
})
export class BestSellersComponent implements OnInit {
  bestSellers: Product[] = [
    {
      id: '1',
      name: "Make Thing Happen T-Shirt",
      description: '',
      category: 'News',
      imageUrl: 'assets/images/wallace-chuck-3261069.jpg',
      createdAt: 'May 25, 2024',
      isPublished: true,
      price: 12.45,
    },
    {
      id: '2',
      name: "Make Thing Happen T-Shirt",
      description: '',
      category: 'News',
      imageUrl: 'assets/images/wallace-chuck-3261069.jpg',
      createdAt: 'May 25, 2024',
      isPublished: true,
      price: 12.45,
    },
    {
      id: '3',
      name: "Make Thing Happen T-Shirt",
      description: '',
      category: 'News',
      imageUrl: 'assets/images/wallace-chuck-3261069.jpg',
      createdAt: 'May 25, 2024',
      isPublished: true,
      price: 12.45,
    },
    {
      id: '3',
      name: "Make Thing Happen T-Shirt",
      description: '',
      category: 'News',
      imageUrl: 'assets/images/wallace-chuck-3261069.jpg',
      createdAt: 'May 25, 2024',
      isPublished: true,
      price: 12.45,
    },
  ];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts();
  }
}
