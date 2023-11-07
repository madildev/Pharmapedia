import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Response } from '../interfaces/response';
import { Categories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseUrl: string = 'https://localhost:7000/api/';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Response<Categories[]>> {
    return this.httpClient
      .get<Response<Categories[]>>(this.baseUrl + 'Categories', {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  getCategory(id: number): Observable<Response<Categories>> {
    return this.httpClient
      .get<Response<Categories>>(`${this.baseUrl}Categories/${id}`, {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  searchCategory(searchString: any): Observable<Response<Categories[]>> {
    return this.httpClient
      .get<Response<Categories[]>>(
        `${this.baseUrl}Categories/search/${searchString}`,
        { responseType: 'json' }
      )
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  deleteCategory(categoryId: number): Observable<Response<any>> {
    return this.httpClient
      .delete<Response<any>>(`${this.baseUrl}Categories/${categoryId}`, {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  editCategory(
    categoryId: number,
    body: Categories
  ): Observable<Response<any>> {
    return this.httpClient
      .put<Response<any>>(`${this.baseUrl}Categories/${categoryId}`, body, {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  createCategory(body: Categories): Observable<Response<any>> {
    return this.httpClient
      .post<Response<any>>(`${this.baseUrl}Categories`, body)
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }
}
