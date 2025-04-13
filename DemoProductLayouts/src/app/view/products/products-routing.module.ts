import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'products/addproduct',
    loadComponent: () => import('./add-product/add-product.component').then(c => c.AddProductComponent)
  },
  {
    path: 'editproduct',
    loadComponent: () => import('./edit-product/edit-product.component').then(c => c.EditProductComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
