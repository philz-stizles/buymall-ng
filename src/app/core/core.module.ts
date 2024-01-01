import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
// import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [RouterModule, SharedModule],
  exports: [FooterComponent, HeaderComponent],
  providers: [
    // LocalStorageService,
    // Here, order matters
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
