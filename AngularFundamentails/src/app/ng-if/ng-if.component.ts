import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIfComponent {

  categoryList = [{ id: 1, name: 'Tv' }, { id: 2, name: 'Mobile' }, { id: 3, name: '' }];
}
