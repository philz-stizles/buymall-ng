import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ProductService } from '../../core/services/product.service';
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
import { CouponService } from '../../core/services/coupon.service';
import { SubCategoriesComponent } from './pages/sub-categories/sub-categories.component';
import { SubCategoryUpsertComponent } from './pages/sub-categories/sub-category-upsert/sub-category-upsert.component';
import { SubCategoryListComponent } from './pages/sub-categories/sub-category-list/sub-category-list.component';
import { SubCategoryService } from '../../core/services/sub-category.service';
import { SizeUpsertComponent } from './pages/sizes/size-upsert/size-upsert.component';
import { SizesComponent } from './pages/sizes/sizes.component';
import { SizeListComponent } from './pages/sizes/size-list/size-list.component';
import { ColorListComponent } from './pages/colors/color-list/color-list.component';
import { ColorUpsertComponent } from './pages/colors/color-upsert/color-upsert.component';
import { CategoryService } from '../../core/services/category.service';
import { ColorsComponent } from './pages/colors/colors.component';
import { SizeService } from '../../core/services/size.service';
import { ColorService } from '../../core/services/color.service';
import { MenuItemComponent } from './components/aside/menu-item/menu-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CouponsComponent,
    CouponListComponent,
    CouponUpsertComponent,
    CategoriesComponent,
    CategoryUpsertComponent,
    CategoryListComponent,
    SubCategoriesComponent,
    SubCategoryUpsertComponent,
    SubCategoryListComponent,
    ProductsComponent,
    ProductUpsertComponent,
    ProductListComponent,
    OrderListComponent,
    OverviewComponent,
    ToolbarComponent,
    AsideComponent,
    MenuItemComponent,
    StatCardComponent,
    TransactionListComponent,
    TransactionItemComponent,
    UserListComponent,
    UserItemComponent,
    UserUpsertComponent,
    InvoiceListComponent,
    InvoiceItemComponent,
    SizesComponent,
    SizeUpsertComponent,
    SizeListComponent,
    ColorsComponent,
    ColorUpsertComponent,
    ColorListComponent,
  ],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    AuthModule,
  ],
  providers: [
    ProductService,
    SubCategoryService,
    CouponService,
    CategoryService,
    SizeService,
    ColorService,
  ],
})
export class DashboardModule {}
