import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Category } from '../models/category.model';
import { Subject, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObjectList, WriteResponse } from '../models/api';

@Injectable()
export class CategoryService {
  baseUrl = environment.baseUrl;
  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  getCategories = () => {
    return this.http.get<ObjectList>(`${this.baseUrl}/categories.json`).pipe(
      map(this.transform),
      tap((categories) => (this.categories = categories))
    );
  };

  getCategory = (id: string) => {
    const category = this.categories.find((c) => c.id === id);
    if (category) {
      return of(category);
    }
    return this.http.get<Category>(`${this.baseUrl}/categories/${id}.json`);
  };

  create = (category: Category) => {
    return this.http
      .post<WriteResponse>(`${this.baseUrl}/categories.json`, category)
      .pipe(
        tap((response) => {
          this.categories = [
            ...this.categories,
            { id: response.name, ...category },
          ];
        })
      );
  };

  update = (id: string, category: Category) => {
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

  deleteCategory = (id: string) => {
    return this.http.delete(`${this.baseUrl}/categories.json/${id}`).pipe(
      tap(() => {
        this.categories = this.categories.filter((item) => item.id !== id);
      })
    );
  };

  private transform(categories: ObjectList): Category[] {
    return !categories
      ? []
      : Object.keys(categories).map((key) => ({ id: key, ...categories[key] }));
  }
}
