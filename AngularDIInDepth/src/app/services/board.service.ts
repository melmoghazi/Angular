import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn:'root',
    useClass:BoardService
  }
)
export class BoardService {

  constructor() { }
}
