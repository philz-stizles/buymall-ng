import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { SubCategory } from '../models/category.model';
import { map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObjectList, WriteResponse } from '../models/api';

@Injectable()
export class SubCategoryService {
  baseUrl = environment.baseUrl;
  categories: SubCategory[] = [];

  constructor(private http: HttpClient) {}

  getSubCategories = () => {
    return this.http.get<ObjectList>(`${this.baseUrl}/subCategories.json`).pipe(
      map(this.transform),
      tap((categories) => (this.categories = categories))
    );
  };

  getSubCategory = (id: string) => {
    return this.categories.find((c) => c.id === id);
    // return this.http.get(`${this.baseUrl}/subCategories.json`);
  };

  create = (category: SubCategory) => {
    return this.http
      .post<WriteResponse>(`${this.baseUrl}/subCategories.json`, category)
      .pipe(
        tap((response) => {
          this.categories = [
            ...this.categories,
            { id: response.name, ...category },
          ];
        })
      );
  };

  update = (id: string, category: SubCategory) => {
    return this.http
      .patch(`${this.baseUrl}/categories/${id}.json`, category)
      .pipe(
        tap((response) => {
          console.log(response);
          const index = this.categories.indexOf(category);
          this.categories[index] = category;
        })
      );
  };

  delete = (id: string) => {
    return this.http.delete(`${this.baseUrl}/subCategories.json/${id}`).pipe(
      tap(() => {
        this.categories = this.categories.filter((item) => item.id !== id);
      })
    );
  };

  private transform(categories: ObjectList): SubCategory[] {
    console.log(categories);
    return !categories
      ? []
      : Object.keys(categories).map((key) => ({ id: key, ...categories[key] }));
  }
}
