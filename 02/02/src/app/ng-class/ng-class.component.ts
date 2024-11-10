import { NgClass, NgStyle } from '@angular/common';

import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {

  productsList=[
    {id:1,name:'Product 1', description:'Product 1 description', price:10},
    {id:2,name:'Product 2', description:'Product 2 description', price:20},
    {id:3,name:'Product 3', description:'Product 3 description', price:30},
    {id:4,name:'Product 4', description:'Product 4 description', price:40},
    {id:5,name:'Product 5', description:'Product 5 description', price:50},
  ];
}
