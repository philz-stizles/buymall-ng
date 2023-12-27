import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PublicComponent } from './public.component';
import { ServicesComponent } from './home/_components/services/services.component';
import { ServiceCardComponent } from './home/_components/services/service-card.components';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './home/_components/jumbotron/jumbotron.component';
import { LatestNewsComponent } from './home/_components/latest-news/latest-news.component';
import { BestSellersComponent } from './home/_components/best-sellers/best-sellers.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    JumbotronComponent,
    ServicesComponent,
    ServiceCardComponent,
    BestSellersComponent,
    LatestNewsComponent,

    ShopComponent,
    CartComponent,
    FavoritesComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule,
  ],
  exports: [RouterModule],
})
export class PublicModule {}
