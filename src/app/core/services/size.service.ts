import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Size } from '../models/size.model';
import { Subject, map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObjectList, WriteResponse } from '../models/api';

@Injectable()
export class SizeService {
  baseUrl = environment.baseUrl;
  sizes: Size[] = [];

  constructor(private http: HttpClient) {}

  getSizes = () => {
    return this.http.get<ObjectList>(`${this.baseUrl}/sizes.json`).pipe(
      map(this.transform),
      tap((sizes) => (this.sizes = sizes))
    );
  };

  getSize = (id: string) => {
    return this.sizes.find((c) => c.id === id);
    // return this.http.get(`${this.baseUrl}/sizes.json`);
  };

  createSize = (size: Size) => {
    return this.http
      .post<WriteResponse>(`${this.baseUrl}/sizes.json`, size)
      .pipe(
        tap((response) => {
          this.sizes = [
            ...this.sizes,
            { id: response.name, ...size },
          ];
        })
      );
  };

  updateSize = (id: string, size: Size) => {
    return this.http
      .patch(`${this.baseUrl}/sizes/${id}.json`, size)
      .pipe(
        tap((response) => {
          console.log(response);
          const index = this.sizes.indexOf(size);
          this.sizes[index] = size;
        })
      );
  };

  deleteSize = (id: string) => {
    return this.http.delete(`${this.baseUrl}/sizes.json/${id}`).pipe(
      tap(() => {
        this.sizes = this.sizes.filter((item) => item.id !== id);
      })
    );
  };

  private transform(sizes: ObjectList): Size[] {
    console.log(sizes);
    return !sizes
      ? []
      : Object.keys(sizes).map((key) => ({ id: key, ...sizes[key] }));
  }
}
