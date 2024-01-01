import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { AuthMode } from '../../auth.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [``],
})
export class SigninComponent {
  readonly AuthMode = AuthMode;
  isLoading = false;
  error?: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit = (signinForm: NgForm) => {
    this.authService
      .signIn({
        email: signinForm.value.email,
        password: signinForm.value.password,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          // You can navigate from here, or the authService.
          this.router.navigate(['/dashboard']);
        },
        error: (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
        },
        complete: () => {
          signinForm.reset();
        },
      });
  };
}
