import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './components/textarea/textarea.component';
import { InputFocusDirective } from './directives/input-focus.directive';
import { ProductCardComponent } from './components/product-card/product-card.components';
import { BlogCardComponent } from './components/blog-card/blog-card.components';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SearchComponent,
    TextareaComponent,
    ProductCardComponent,
    BlogCardComponent,
    InputFocusDirective,
    LogoComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    InputComponent,
    SearchComponent,
    TextareaComponent,
    ProductCardComponent,
    BlogCardComponent,
    InputFocusDirective,
    LogoComponent,
  ],
})
export class SharedModule {}
