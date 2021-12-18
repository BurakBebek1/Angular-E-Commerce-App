import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.baseUrl).pipe(
      map((response:any) => {
        return response;
      })
    )
  }
}
