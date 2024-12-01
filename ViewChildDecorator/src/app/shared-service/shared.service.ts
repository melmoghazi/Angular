import { BehaviorSubject } from 'rxjs';
import { TestMessage } from './../../../node_modules/rxjs/dist/types/internal/testing/TestMessage.d';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private message = new BehaviorSubject('Initial message');
  getMessage = this.message.asObservable();

  constructor() { }

  setMessage(message: string) {
    this.message.next(message);
  }
  
}
