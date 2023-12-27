import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
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
          this.router.navigate(['/dashboard']);
        },
        error: (err: any) => {},
      });
  };
}
