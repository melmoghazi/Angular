//import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  //imports: [NgForOf, NgFor],
  imports:[SharedModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.scss'
})
export class NgForComponent {
  //categoryList:Array<any> =[];
  categoryList = [{ id: 1, name: 'Tv' }, { id: 2, name: 'Mobile' }, { id: 3, name: 'Laptop' }];
}
