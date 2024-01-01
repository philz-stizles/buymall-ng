import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProductUpsertComponent } from './pages/products/product-upsert/product-upsert.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProductsComponent } from './pages/products/products.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { authGuard } from '../../core/guards/auth.guard';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { CategoryUpsertComponent } from './pages/categories/category-upsert/category-upsert.component';
import { CouponListComponent } from './pages/coupons/coupon-list/coupon-list.component';
import { CouponUpsertComponent } from './pages/coupons/coupon-upsert/coupon-upsert.component';

import { SubCategoriesComponent } from './pages/sub-categories/sub-categories.component';
import { SubCategoryListComponent } from './pages/sub-categories/sub-category-list/sub-category-list.component';
import { SubCategoryUpsertComponent } from './pages/sub-categories/sub-category-upsert/sub-category-upsert.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { ColorListComponent } from './pages/colors/color-list/color-list.component';
import { ColorUpsertComponent } from './pages/colors/color-upsert/color-upsert.component';
import { SizesComponent } from './pages/sizes/sizes.component';
import { SizeListComponent } from './pages/sizes/size-list/size-list.component';
import { SizeUpsertComponent } from './pages/sizes/size-upsert/size-upsert.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        children: [
          {
            path: '',
            component: CategoryListComponent,
          },
          {
            path: 'upsert',
            component: CategoryUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: CategoryUpsertComponent,
          },
        ],
      },
      {
        path: 'sub-categories',
        component: SubCategoriesComponent,
        children: [
          {
            path: '',
            component: SubCategoryListComponent,
          },
          {
            path: 'upsert',
            component: SubCategoryUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: SubCategoryUpsertComponent,
          },
        ],
      },
      {
        path: 'colors',
        component: ColorsComponent,
        children: [
          {
            path: '',
            component: ColorListComponent,
          },
          {
            path: 'upsert',
            component: ColorUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: ColorUpsertComponent,
          },
        ],
      },
      {
        path: 'sizes',
        component: SizesComponent,
        children: [
          {
            path: '',
            component: SizeListComponent,
          },
          {
            path: 'upsert',
            component: SizeUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: SizeUpsertComponent,
          },
        ],
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: ProductListComponent,
          },
          {
            path: 'upsert',
            component: ProductUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: ProductUpsertComponent,
          },
        ],
      },
      {
        path: 'coupons',
        component: CouponsComponent,
        children: [
          {
            path: '',
            component: CouponListComponent,
          },
          {
            path: 'upsert',
            component: CouponUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: CouponUpsertComponent,
          },
        ],
      },
      {
        path: 'orders',
        component: CouponsComponent,
        children: [
          {
            path: '',
            component: CouponListComponent,
          },
          {
            path: 'upsert',
            component: CouponUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: CouponUpsertComponent,
          },
        ],
      },
      {
        path: 'transactions',
        component: CouponsComponent,
        children: [
          {
            path: '',
            component: CouponListComponent,
          },
          {
            path: 'upsert',
            component: CouponUpsertComponent,
          },
          {
            path: 'upsert/:id',
            component: CouponUpsertComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
