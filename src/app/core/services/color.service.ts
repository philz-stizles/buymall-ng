import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Color } from '../models/color.model';
import { Subject, map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObjectList, WriteResponse } from '../models/api';

@Injectable()
export class ColorService {
  baseUrl = environment.baseUrl;
  colors: Color[] = [];

  constructor(private http: HttpClient) {}

  getColors = () => {
    return this.http.get<ObjectList>(`${this.baseUrl}/colors.json`).pipe(
      map(this.transform),
      tap((colors) => (this.colors = colors))
    );
  };

  getColor = (id: string) => {
    return this.colors.find((c) => c.id === id);
    // return this.http.get(`${this.baseUrl}/colors.json`);
  };

  createColor = (color: Color) => {
    return this.http
      .post<WriteResponse>(`${this.baseUrl}/colors.json`, color)
      .pipe(
        tap((response) => {
          this.colors = [
            ...this.colors,
            { id: response.name, ...color },
          ];
        })
      );
  };

  updateColor = (id: string, color: Color) => {
    return this.http
      .patch(`${this.baseUrl}/colors/${id}.json`, color)
      .pipe(
        tap((response) => {
          console.log(response);
          const index = this.colors.indexOf(color);
          this.colors[index] = color;
        })
      );
  };

  deleteColor = (id: string) => {
    return this.http.delete(`${this.baseUrl}/colors.json/${id}`).pipe(
      tap(() => {
        this.colors = this.colors.filter((item) => item.id !== id);
      })
    );
  };

  private transform(colors: ObjectList): Color[] {
    console.log(colors);
    return !colors
      ? []
      : Object.keys(colors).map((key) => ({ id: key, ...colors[key] }));
  }
}
