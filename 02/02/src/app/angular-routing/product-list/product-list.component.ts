import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(private router: Router) {

  }
  productsList = [
    { id: 1, name: 'Product 1', description: 'Product 1 description', price: 10, dateAdded: '2021-10-11' },
    { id: 2, name: 'Product 2', description: 'Product 2 description', price: 20.22, dateAdded: '2022-05-11' },
    { id: 3, name: 'Product 3', description: 'Product 3 description', price: 30.333, dateAdded: '2023-12-02' },
    { id: 4, name: 'Product 4', description: 'Product 4 description', price: 40.4444, dateAdded: '2021-10-22' },
    { id: 5, name: 'Product 5', description: 'Product 5 description', price: 50.05, dateAdded: '2020-01-14' },
  ];


  editProduct(productId: number) {
    //this.router.navigateByUrl(`/ar-edit-product/${productId}`);
    console.log('in edit= ', productId);
    this.router.navigate(['ar-edit-product'], { queryParams: { id: productId } });
  }
}
