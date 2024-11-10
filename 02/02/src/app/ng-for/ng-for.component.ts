import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [NgForOf, NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {

  categoryList = [{ id: 1, name: 'Tv' }, { id: 2, name: 'Mobile' }, { id: 3, name: 'Laptop' }];
}
