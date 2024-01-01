import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { AuthComponent } from './auth.component';
import { SignupComponent } from './_components/signup/signup.component';
import { SigninComponent } from './_components/signin/signin.component';

import { publicGuard } from '../../core/guards/public.guard';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [AuthComponent, SignupComponent, SigninComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [publicGuard],
        component: AuthComponent,
      },
    ]),
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  exports: [RouterModule],
})
export class AuthModule {}
