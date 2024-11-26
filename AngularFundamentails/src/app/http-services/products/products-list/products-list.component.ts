import { Component, OnInit } from '@angular/core';

import { ProductsListService } from '../products-list.service';
import { Product } from '../../../shared/product.model';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {

  productsList: Array<Product> = [];
  constructor(private productsListService: ProductsListService) { }


  ngOnInit(): void {
    this.productsListService.getProductsList().subscribe(
      (res) => {
        this.productsList = res;
        console.log('products list= ', this.productsList);
      }
    );
  }
}
