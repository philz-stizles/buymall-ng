import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Coupon } from '../models/coupon.model';

export class CouponService {
  baseUrl = environment.baseUrl;
  coupons: Coupon[] = [];

  constructor(private http: HttpClient) {}

  getCoupons = () => {
    this.http.get(`${this.baseUrl}/coupons.json`);
  };

  getCoupon = () => {
    this.http.get(`${this.baseUrl}/coupons.json`);
  };

  createCoupon = (coupon: Coupon) => {
    return this.http.post(`${this.baseUrl}/coupons.json`, coupon);
  };

  updateCoupon = (id: string, coupon: Coupon) => {
    return this.http.patch(`${this.baseUrl}/coupons.json/${id}`, coupon);
  };

  deleteCoupon = (id: string) => {
    return this.http.delete(`${this.baseUrl}/coupons.json/${id}`);
  };
}
