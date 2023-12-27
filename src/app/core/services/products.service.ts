import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  baseUrl = environment.baseUrl;
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts = () => {
    this.http.get(`${this.baseUrl}/products.json`);
  };

  getProduct = (id: string) => {
    return this.products.find((p) => p.id === id);
    // return this.http.get(`${this.baseUrl}/products.json`);
  };

  createProduct = (product: Product) => {
    return this.http.post(`${this.baseUrl}/products.json`, product);
  };

  updateProduct = (id: string, product: Product) => {
    return this.http.patch(`${this.baseUrl}/products.json/${id}`, product);
  };

  deleteProduct = (id: string) => {
    return this.http.delete(`${this.baseUrl}/products.json/${id}`);
  };
}
