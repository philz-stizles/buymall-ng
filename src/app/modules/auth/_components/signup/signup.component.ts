import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AuthMode } from '../../auth.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [``],
})
export class SignupComponent {
  readonly AuthMode = AuthMode;
  isLoading = false;
  error?: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit = (signupForm: NgForm) => {
    this.isLoading = true;
    this.error = undefined;

    this.authService
      .signUp({
        firstname: signupForm.value.firstname,
        lastname: signupForm.value.firstname,
        email: signupForm.value.email,
        password: signupForm.value.password,
      })
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: (err: any) => {
          this.error = err;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  };
}
