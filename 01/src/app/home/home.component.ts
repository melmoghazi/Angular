import { RegisterComponent } from './../account/register/register.component';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  productsList: Array<any> = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProductList()
      .subscribe(
        {
          next: (products: any) => { this.productsList = products; console.log(this.productsList)}
          
        }
      );

  }
}
