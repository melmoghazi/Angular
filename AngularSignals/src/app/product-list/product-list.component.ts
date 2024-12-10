import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];
  productsSignal = signal<Array<Product>>([]);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res => {
        //this.products = res;
        this.productsSignal.set(res)
        console.log('respose', res);
      })
    );
  }

  onClick() {

  }



}
