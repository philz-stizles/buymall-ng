export interface Coupon {
  id?: string;
  code: string;
  description: string;
  discount: number;
  expiresOn: Date;
}
