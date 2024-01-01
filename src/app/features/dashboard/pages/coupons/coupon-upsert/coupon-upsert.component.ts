import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Coupon } from '../../../../../core/models/coupon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CouponService } from '../../../../../core/services/coupon.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coupon-upsert',
  templateUrl: './coupon-upsert.component.html',
  styleUrl: './coupon-upsert.component.scss',
})
export class CouponUpsertComponent implements OnInit, AfterViewInit {
  @ViewChild('couponForm', { static: false }) couponForm!: NgForm;
  isLoading = false;
  error: string | null = null;
  selectedCoupon?: Coupon;

  constructor(
    private couponService: CouponService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const couponId = params['id']; // If id must be a number, then +params['id']
      if (couponId) {
        const coupon = this.couponService.getCoupon(couponId);
        this.selectedCoupon = coupon;
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.selectedCoupon) {
      this.initForm(this.selectedCoupon);
    }
  }

  isEditMode() {
    return !!this.selectedCoupon;
  }

  onSubmit(couponForm: NgForm) {
    this.isLoading = true;
    this.error = null;

    let upsertObservable: Observable<Object>; //

    const coupon: Coupon = {
      code: couponForm.value.code,
      description: couponForm.value.description,
      discount: couponForm.value.discount,
      expiresOn: couponForm.value.expiresOn,
    };

    if (this.isEditMode()) {
      upsertObservable = this.couponService.updateCoupon(
        this.selectedCoupon?.id!,
        coupon
      );
    } else {
      upsertObservable = this.couponService.createCoupon(coupon);
    }

    upsertObservable.subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate([this.isEditMode() ? '../..' : '../'], {
          relativeTo: this.activatedRoute,
        });
      },
      error: (err) => {
        this.error = err.message || 'An error occurred';
        this.isLoading = false;
      },
      complete: () => {
        this.couponForm.resetForm();
      },
    });
  }

  private initForm(coupon?: Coupon) {
    if (coupon) {
      setTimeout(() => {
        this.couponForm.setValue({
          code: coupon.code,
          description: coupon.description,
          discount: coupon.discount,
          expiresOn: coupon.expiresOn ?? '',
        });

        // this.couponForm.reset({
        //   code: coupon.code,
        //   description: coupon.description,
        //   discount: coupon.discount,
        //   expiresOn: coupon.expiresOn ?? '',
        // });
      });
    }
  }
}
