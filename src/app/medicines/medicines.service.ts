import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Medicines } from '../interfaces/medicines';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class MedicinesService {
  baseUrl: string = 'https://localhost:7000/api/';

  constructor(private httpClient: HttpClient) {}

  getMedicines(): Observable<Response<Medicines[]>> {
    return this.httpClient
      .get<Response<Medicines[]>>(this.baseUrl + 'Medicines', {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  getMedicine(id: number): Observable<Response<Medicines>> {
    return this.httpClient
      .get<Response<Medicines>>(`${this.baseUrl}Medicines/${id}`, {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  searchMedicine(
    searchString: any,
    option: string
  ): Observable<Response<Medicines[]>> {
    return this.httpClient
      .get<Response<Medicines[]>>(
        `${this.baseUrl}Medicines/search/${searchString}/${option}`,
        { responseType: 'json' }
      )
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  deleteMedicine(MedicineId: number): Observable<Response<any>> {
    return this.httpClient
      .delete<Response<any>>(`${this.baseUrl}Medicines/${MedicineId}`, {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  editMedicine(MedicineId: number, body: Medicines): Observable<Response<any>> {
    return this.httpClient
      .put<Response<any>>(`${this.baseUrl}Medicines/${MedicineId}`, body, {
        responseType: 'json',
      })
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }

  createMedicine(body: Medicines): Observable<Response<any>> {
    return this.httpClient
      .post<Response<any>>(`${this.baseUrl}Medicines`, body)
      .pipe(
        map((res) => res),
        catchError((err) => {
          return throwError(err.error);
        })
      );
  }
}
