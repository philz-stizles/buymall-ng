import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CouponService } from '../../../../../core/services/coupons.service';

@Component({
  selector: 'app-coupon-upsert',
  templateUrl: './coupon-upsert.component.html',
  styleUrl: './coupon-upsert.component.scss',
})
export class CouponUpsertComponent {
  constructor(private couponService: CouponService) {}

  onSubmit = (form: NgForm) => {
    this.couponService.createCoupon(form.value).subscribe();
  };
}
