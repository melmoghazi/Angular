import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesList: Course[] = [
    { id: 1, name: 'Introduction course 1' },
    { id: 2, name: 'Introduction course 2' },
    { id: 3, name: 'Introduction course 3' },
    { id: 4, name: 'Introduction course 4' },
    { id: 5, name: 'Introduction course 5' }
  ];

  constructor() { }

  getCourseById(id?: string|undefined|null): Course | null | undefined {
    if (id) {
      return this.coursesList.find(c => c.id == Number(id));
    }
    return null
  }
}
