import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Category } from '../models/category.model';

export class CategoriesService {
  baseUrl = environment.baseUrl;
  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  getCategories = () => {
    this.http.get(`${this.baseUrl}/categories.json`);
  };

  getCategory = () => {
    this.http.get(`${this.baseUrl}/categories.json`);
  };

  createCategory = (coupon: Category) => {
    return this.http.post(`${this.baseUrl}/categories.json`, coupon);
  };

  updateCategory = (id: string, coupon: Category) => {
    return this.http.patch(`${this.baseUrl}/categories.json/${id}`, coupon);
  };

  deleteCategory = (id: string) => {
    return this.http.delete(`${this.baseUrl}/categories.json/${id}`);
  };
}
