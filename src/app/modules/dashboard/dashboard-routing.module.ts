import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProductUpsertComponent } from './pages/products/product-upsert/product-upsert.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ProductsComponent } from './pages/products/products.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { authGuard } from '../auth/auth.guard';

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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
