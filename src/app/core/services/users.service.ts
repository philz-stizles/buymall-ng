import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { User } from '../models/user.model';
import { map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ObjectList, WriteResponse } from '../models/api';

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;
  users: User[] = [];

  constructor(private http: HttpClient) {}

  getCategories = () => {
    return this.http.get<ObjectList>(`${this.baseUrl}/users.json`).pipe(
      map(this.transform),
      tap((users) => (this.users = users))
    );
  };

  getUser = (id: string) => {
    return this.http.get<User>(`${this.baseUrl}/users/${id}.json`);
  };

  createUser = (user: User) => {
    return this.http.post(`${this.baseUrl}/users.json`, user);
  };

  updateUser = (id: string, user: User) => {
    return this.http.patch(`${this.baseUrl}/users/${id}.json`, user).pipe(
      tap((response) => {
        console.log(response);
        const index = this.users.indexOf(user);
        this.users[index] = user;
      })
    );
  };

  deleteUser = (id: string) => {
    return this.http.delete(`${this.baseUrl}/users.json/${id}`).pipe(
      tap(() => {
        this.users = this.users.filter((item) => item.id !== id);
      })
    );
  };

  private transform(users: ObjectList): User[] {
    console.log(users);
    return !users
      ? []
      : Object.keys(users).map((key) => ({ id: key, ...users[key] }));
  }
}
