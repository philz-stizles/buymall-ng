import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export enum AuthMode {
  SignUp = 'signUp',
  SignIn = 'signIn',
}

@Component({
  selector: 'app-auth',
  template: `
    <main class="auth">
      <section class="form">
        <ng-container
          *ngIf="authMode === AuthMode.SignUp; then signUp; else signIn"
        ></ng-container>
        <ng-template #signUp>
          <app-signup></app-signup>
        </ng-template>
        <ng-template #signIn>
          <app-signin></app-signin>
        </ng-template>
      </section>
    </main>
  `,
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  readonly AuthMode = AuthMode;
  authMode = AuthMode.SignIn;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        this.authMode = fragment as AuthMode;
      }
    });
  }
}
