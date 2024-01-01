import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  onNewProduct = () => {
    console.log('onClick');
    this.router.navigate(['upsert'], { relativeTo: this.activeRoute });
  };
}
