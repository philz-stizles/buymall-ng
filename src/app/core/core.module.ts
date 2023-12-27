import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {
  LucideAngularModule,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-angular';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule.pick({ Facebook, Instagram, Youtube, Twitter }),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [FooterComponent, HeaderComponent],
  providers: [LocalStorageService],
})
export class CoreModule {}
