import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard.component';
import { CouponListComponent } from './pages/coupons/coupon-list/coupon-list.component';
import { CouponUpsertComponent } from './pages/coupons/coupon-upsert/coupon-upsert.component';
import { CategoryUpsertComponent } from './pages/categories/category-upsert/category-upsert.component';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { ProductUpsertComponent } from './pages/products/product-upsert/product-upsert.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsComponent } from './pages/products/products.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductService } from '../../core/services/products.service';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TransactionListComponent } from './pages/transactions/transaction-list/transaction-list.component';
import { TransactionItemComponent } from './pages/transactions/transaction-item/transaction-item.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserItemComponent } from './pages/users/user-item/user-item.component';
import { UserUpsertComponent } from './pages/users/user-upsert/user-upsert.component';
import { InvoiceListComponent } from './pages/invoices/invoice-list/invoice-list.component';
import { InvoiceItemComponent } from './pages/invoices/invoice-item/invoice-item.component';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CouponsComponent,
    CouponListComponent,
    CouponUpsertComponent,
    CategoriesComponent,
    CategoryUpsertComponent,
    CategoryListComponent,
    ProductsComponent,
    ProductUpsertComponent,
    ProductListComponent,
    OrderListComponent,
    OverviewComponent,
    ToolbarComponent,
    AsideComponent,
    StatCardComponent,
    TransactionListComponent,
    TransactionItemComponent,
    UserListComponent,
    UserItemComponent,
    UserUpsertComponent,
    InvoiceListComponent,
    InvoiceItemComponent,
  ],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CoreModule,
    SharedModule,
    AuthModule,
  ],
  providers: [ProductService],
})
export class DashboardModule {}
