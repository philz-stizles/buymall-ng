import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

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
export class HeaderComponent implements OnInit, OnDestroy {
  user: User | null = null;
  private userSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onNavigateToLogin = () => {
    this.router.navigate(['/auth']);
  };
}
