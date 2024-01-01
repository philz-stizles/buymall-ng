import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <app-aside></app-aside>
      <div class="content">
        <app-toolbar></app-toolbar>
        <main class="px-7 py-4"><router-outlet></router-outlet></main>
      </div>
    </div>
  `,
  styles: [
    `
      .dashboard {
        display: flex;
        flex-direction: row;

        .content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;

          main {
            flex-grow: 1;
          }
        }
      }
    `,
  ],
})
export class DashboardComponent {}
