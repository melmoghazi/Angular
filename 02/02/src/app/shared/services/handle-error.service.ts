import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }
  handleError(errorResponse: HttpErrorResponse): Observable<any> {
    if (errorResponse.status === 0) {
      //client side error
      console.log(`Client side error occurred: ${errorResponse.status} - ${errorResponse.error}`);

    } else {
      //server side error
      console.log(`Server side error occurred: ${errorResponse.status} - ${errorResponse.error}`);
    }
    return throwError(() => new Error('Something went wrong.'));
  }
}
