import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [];

  // courses: Array<Course> = [
  //   { id: 1, name: 'course 1' },
  //   { id: 2, name: 'course 2' },
  //   { id: 3, name: 'course 3' }
  // ];

  constructor(private http:HttpClient) { }

  getCourses():Observable<Array<Course>> {
    return this.http.get<Array<Course>>('https://apicommerce.runasp.net/products/list');
  }
}
