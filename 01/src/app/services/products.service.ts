import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceURL } from './servicesURL';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  sURL: ServiceURL = new ServiceURL();

  constructor(private http: HttpClient) { }
  getProductList(): Observable<any> {
    let list = this.http.get(`${this.sURL.baseURL}products/list`);
    return list;
  }
}
