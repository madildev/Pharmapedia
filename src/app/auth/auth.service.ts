import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Response } from '../interfaces/response';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://localhost:7000/api/';

  constructor(private httpClient: HttpClient) {}

  signUp(body: any): Observable<Response<any>> {
    return this.httpClient
      .post<Response<any>>(`${this.baseUrl}Auth/SignUp`, body)
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  logIn(body: any): Observable<Login> {
    return this.httpClient.post<Login>(`${this.baseUrl}Auth/Login`, body).pipe(
      map((res) => res),
      catchError((err) => {
        return throwError(err.error);
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('JwtToken');

    if (token != null) {
      const payload = atob(token!.split('.')[1]); 

      const parsedPayload = JSON.parse(payload);

      return parsedPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.clear();
  }

  getToken() {
    const token = localStorage.getItem('JwtToken');
    return token;
  }
}
