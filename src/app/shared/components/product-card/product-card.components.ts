import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card mb-35">
      <div class="product-img product-img-zoom mb-15">
        <a href="product-details.html">
          <img src="{{ product.imageUrl }}" alt="{{ product.name }}" />
        </a>
        <span class="pro-badge left bg-red">-20%</span>
        <div class="product-action-2 tooltip-style-2">
          <button title="Wishlist"><i class="icon-heart"></i></button>
          <button
            title="Quick View"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i class="icon-size-fullscreen icons"></i>
          </button>
          <button title="Compare"><i class="icon-refresh"></i></button>
        </div>
      </div>

      <div class="text-center">
        <div class="flex justify-center gap-1">
          <div class="product-rating">
            <i class="icon_star"></i>
            <i class="icon_star"></i>
            <i class="icon_star"></i>
            <i class="icon_star"></i>
            <i class="icon_star gray"></i>
          </div>
          <span>(2)</span>
        </div>
        <h3 class="text-sm font-bold mt-1 mb-2">
          <a href="product-details.html">{{ product.name }}</a>
        </h3>
        <div class="price flex-row justify-center gap-2 text-md">
          <span class="new-price">$35.45</span>
          <span class="old-price">$45.80</span>
        </div>
        <!-- <div class="add-to-cart">
          <app-button label="Add to Cart"></app-button>
        </div> -->
      </div>
    </div>
  `,
  styles: [
    `
      .product-card {
        i {
          color: #ff9806;
          &.icon_star {
            &:before {
              content: '\e033';
            }

            &.gray {
              color: #cccccc;
            }
          }
        }

        .price {
          .old-price {
            font-size: 14px;
            color: #999999;
            text-decoration: line-through;
          }
        }

        .add-to-cart {
          margin: 14px 0 0;
        }
      }
    `,
  ],
})
export class ProductCardComponent {
  @Input() product!: Product;
}
