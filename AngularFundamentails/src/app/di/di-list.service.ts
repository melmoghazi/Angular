import { Injectable } from '@angular/core';

import { DiModel } from './di-Model';

@Injectable({
  providedIn: 'root'
})
export class DiListService {

  constructor() { }


  sizesList: DiModel[] = [
    { id: 1, name: 'Small' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'Large' }
  ];
}
