import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './_components/signup/signup.component';
import { SigninComponent } from './_components/signin/signin.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
      },
    ]),
    FormsModule,
    SharedModule,
  ],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AuthModule {}
