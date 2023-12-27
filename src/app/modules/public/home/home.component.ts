import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-jumbotron> </app-jumbotron>
    <app-services> </app-services>
    <app-best-sellers> </app-best-sellers>
    <app-latest-news> </app-latest-news>
  `,
  styles: [``],
})
export class HomeComponent {}
