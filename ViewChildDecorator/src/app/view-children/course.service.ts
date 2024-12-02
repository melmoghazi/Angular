import { Injectable, OnInit } from '@angular/core';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesList: Course[] = [
      { id: 1, name: 'course 1', price: 10 },
      { id: 2, name: 'course 2', price: 20 },
      { id: 3, name: 'course 3', price: 30 },
      { id: 4, name: 'course 4', price: 40 },
      { id: 5, name: 'course 5', price: 50 },
    ]
  

  getCoursesList() {
    return this.coursesList;
  }
}
