import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Coupon } from '../models/coupon.model';
import { map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObjectList, WriteResponse } from '../models/api';

@Injectable()
export class CouponService {
  baseUrl = environment.baseUrl;
  coupons: Coupon[] = [];

  constructor(private http: HttpClient) {}

  getCategories = () => {
    return this.http.get<ObjectList>(`${this.baseUrl}/coupons.json`).pipe(
      map(this.transform),
      tap((coupons) => (this.coupons = coupons))
    );
  };

  getCoupon = (id: string) => {
    return this.coupons.find((c) => c.id === id);
    // return this.http.get(`${this.baseUrl}/coupons.json`);
  };

  createCoupon = (coupon: Coupon) => {
    return this.http
      .post<WriteResponse>(`${this.baseUrl}/coupons.json`, coupon)
      .pipe(
        tap((response) => {
          this.coupons = [...this.coupons, { id: response.name, ...coupon }];
        })
      );
  };

  updateCoupon = (id: string, coupon: Coupon) => {
    return this.http.patch(`${this.baseUrl}/coupons/${id}.json`, coupon).pipe(
      tap((response) => {
        console.log(response);
        const index = this.coupons.indexOf(coupon);
        this.coupons[index] = coupon;
      })
    );
  };

  deleteCoupon = (id: string) => {
    return this.http.delete(`${this.baseUrl}/coupons.json/${id}`).pipe(
      tap(() => {
        this.coupons = this.coupons.filter((item) => item.id !== id);
      })
    );
  };

  private transform(coupons: ObjectList): Coupon[] {
    console.log(coupons);
    return !coupons
      ? []
      : Object.keys(coupons).map((key) => ({ id: key, ...coupons[key] }));
  }
}
