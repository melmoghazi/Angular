import { HandleErrorService } from './../../shared/services/handle-error.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  constructor(private httpClient: HttpClient,
    private handleErrorService: HandleErrorService
  ) { }

  //after handle error service and interceptor
  getRequest<T>(name: string): Observable<T> {
    return this.httpClient.get<T>(`https://apicommerce.runasp.net/${name}`);
    // .pipe(
    //   catchError(this.handleErrorService.handleError)
    // );
  }

  // //before handle error service and interceptor
  // getRequest<T>(name: string): Observable<T> {
  //   return this.httpClient.get<T>(`https://apicommerce.runasp.net/${name}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // private handleError(errorResponse: HttpErrorResponse): Observable<any> {
  //   if (errorResponse.status === 0) {
  //     //client side error
  //     console.log(`Client side error occurred: ${errorResponse.status} - ${errorResponse.error}`);

  //   } else {
  //     //server side error
  //     console.log(`Server side error occurred: ${errorResponse.status} - ${errorResponse.error}`);
  //   }
  //   return throwError(() => new Error('Something went wrong.'));
  // }
}
