import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ObjectList, WriteResponse } from '../models/api';

@Injectable({ providedIn: 'root' })
export class ProductService {
  baseUrl = environment.baseUrl;
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts = () => {
    this.http.get<ObjectList>(`${this.baseUrl}/products.json`);
  };

  getProduct = (id: string) => {
    const product = this.products.find((p) => p.id === id);
    if (product!!) return of(product);

    return this.http.get<Product>(`${this.baseUrl}/products/${id}.json`);
  };

  create = (product: Product) => {
    return this.http.post<WriteResponse>(
      `${this.baseUrl}/products.json`,
      product
    );
  };

  update = (id: string, product: Product) => {
    return this.http.patch<WriteResponse>(
      `${this.baseUrl}/products.json/${id}`,
      product
    );
  };

  delete = (id: string) => {
    return this.http.delete(`${this.baseUrl}/products.json/${id}`);
  };
}
