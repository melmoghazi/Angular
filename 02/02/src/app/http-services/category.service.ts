import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //method inject
  httpClient = inject(HttpClient);

  getCategories(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(`https://apicommerce.runasp.net/categories/list`);
  }
}

