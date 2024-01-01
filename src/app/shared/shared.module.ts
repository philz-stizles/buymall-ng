import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {
  LucideAngularModule,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-angular';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './components/textarea/textarea.component';
import { InputFocusDirective } from './directives/input-focus.directive';
import { ProductCardComponent } from './components/product-card/product-card.components';
import { BlogCardComponent } from './components/blog-card/blog-card.components';
import { LogoComponent } from './components/logo/logo.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { LinkifyPipe } from './pipes/linkify.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { NgChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SearchComponent,
    TextareaComponent,
    ProductCardComponent,
    BlogCardComponent,
    InputFocusDirective,
    PlaceholderDirective,
    LogoComponent,
    ModalComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    IconButtonComponent,
    LinkifyPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ Facebook, Instagram, Youtube, Twitter }),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    NgChartsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    CommonModule,
    LucideAngularModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    NgChartsModule,
    ToastrModule,
    ButtonComponent,
    InputComponent,
    SearchComponent,
    TextareaComponent,
    ProductCardComponent,
    BlogCardComponent,
    InputFocusDirective,
    PlaceholderDirective,
    LogoComponent,
    ModalComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    IconButtonComponent,
    LinkifyPipe,
  ],
})
export class SharedModule {}
