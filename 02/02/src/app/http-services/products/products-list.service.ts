import { Observable } from 'rxjs';
import { ProductAPIService } from './product-api.service';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor(private productAPIService: ProductAPIService) { }

  getProductsList(): Observable<Array<Product>> {
    return this.productAPIService.getRequest('products/list');
  }
}
