import { ResolveFn } from '@angular/router';
import { Course } from './course';
import { inject } from '@angular/core';
import { CourseService } from './course.service';

export const courseResolver: ResolveFn<Course> = (route, state) => {
  console.log('inside course resolverfn');
  const courseService = inject(CourseService);
  return courseService.getCourseById(route.paramMap.get('id')) as Course;
};
