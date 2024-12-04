import { Component, input, TemplateRef } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {

}
