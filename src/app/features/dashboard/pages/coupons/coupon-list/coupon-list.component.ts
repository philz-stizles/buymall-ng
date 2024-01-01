import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../../../core/models/coupon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from '../../../../../core/services/coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.scss',
})
export class CouponListComponent implements OnInit {
  coupons: Coupon[] = [];

  constructor(
    private couponService: CouponService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  onNavigateToCreate() {
    this.router.navigate(['upsert'], { relativeTo: this.activatedRoute });
  }

  onNavigateToEdit(id: string) {
    this.router.navigate(['upsert', id], { relativeTo: this.activatedRoute });
  }

  onNavigateToDetails(id: string) {
    this.router.navigate(['upsert', id], { relativeTo: this.activatedRoute });
  }

  onDelete(id: string) {
    this.couponService.deleteCoupon(id).subscribe(() => {});
  }

  private loadCategories() {
    this.couponService.getCategories().subscribe((coupons) => {
      this.coupons = coupons;
    });
  }
}
