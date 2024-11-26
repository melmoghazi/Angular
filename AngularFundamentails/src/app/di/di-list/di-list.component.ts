import { Component, OnInit } from '@angular/core';

import { DiListService } from '../di-list.service';
import { DiModel } from '../di-Model';

@Component({
  selector: 'app-di-list',
  standalone: true,
  imports: [],
  templateUrl: './di-list.component.html',
  styleUrl: './di-list.component.scss'
})
export class DiListComponent implements OnInit {

  list: Array<DiModel> = [];

  constructor(private diListService: DiListService) { }

  ngOnInit(): void {
    this.list = this.diListService.sizesList;
  }
}
