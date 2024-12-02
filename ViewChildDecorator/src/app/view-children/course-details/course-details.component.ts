import { Component, Input, OnInit } from '@angular/core';

import { CourseService } from '../course.service';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent  {

  @Input() course!:Course;

}
