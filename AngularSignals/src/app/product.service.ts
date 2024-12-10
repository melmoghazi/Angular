import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('https://apicommerce.runasp.net/products/list');
  }
  
  // products: Product[] = [
  //   { id: 1, name: 'prod 1', description: 'desc1', price: 10 },
  //   { id: 2, name: 'prod 2', description: 'desc2', price: 20 },
  //   { id: 3, name: 'prod 3', description: 'desc3', price: 30 }
  // ];
  // getProductsList() {
  //   return this.products;
  // }
}

