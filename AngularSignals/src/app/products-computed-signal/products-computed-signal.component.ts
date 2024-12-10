import { ChangeDetectionStrategy, Component, computed, effect, OnInit, signal } from '@angular/core';

import { ProductService } from './../product.service';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products-computed-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products-computed-signal.component.html',
  styleUrl: './products-computed-signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComputedSignalComponent implements OnInit {

  searchTextSignal = signal<string>('');
  private productsSignal = signal<Array<Product>>([]);
  //computed signal
  productsComputed = computed(
    () => {
      if (this.searchTextSignal()) {
        //filter
        return this.productsSignal().filter(c => c.name.toLocaleLowerCase().includes(this.searchTextSignal().toLocaleLowerCase()));
      } else {
        return this.productsSignal();
        //return [];
      }
    }
  );
  //readonly signal
  displayedColumns = signal<string[]>([
    'Id', 'Name', 'Description', 'Price'
  ]).asReadonly();

  //constructor
  constructor(private productService: ProductService) {
    //run on every change
    effect(
      () => {
        this.productsSignal.set([]);
        console.log('displayproductscount=', this.productsComputed.length);
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res) => {
        this.productsSignal.set(res)
        console.log('res', res);
      }
    );
  }

  updateSearchTextSignal(searchText: string) {
    this.searchTextSignal.set(searchText);
    console.log(searchText);
  }
}
