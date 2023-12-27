import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .header {
        .header-bottom {
          .nav {
            flex-grow: 1;

            ul {
              & > li {
                line-height: 95px;
                & > a {
                  color: #000000;
                  text-transform: uppercase;
                }
              }
            }
          }
        }
      }
    `,
  ],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onNavigateToLogin = () => {
    this.router.navigate(['/auth']);
  };
}
