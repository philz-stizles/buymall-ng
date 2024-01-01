import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
    this.authService.autoSignIn();
  }
}
