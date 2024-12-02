import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseDetailsComponent } from '../course-details/course-details.component';
import { Course } from '../../shared/models/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CourseDetailsComponent, FormsModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit, AfterViewInit {

  @ViewChildren(CourseDetailsComponent) courseChildren!: QueryList<CourseDetailsComponent>

  seachText = '';
  displayedCourses: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngAfterViewInit(): void {
    this.courseChildren.changes.subscribe(
      (res: QueryList<CourseDetailsComponent>) => {
        if (res && res.length > 0) {
          res.forEach(
            course => console.log(course)
          );
        }
      }
    );
    console.log('courseChildren', this.courseChildren);
  }

  ngOnInit(): void {
    this.displayedCourses = this.courses = this.courseService.getCoursesList();
  }

  updateSeachText(searchText: string): void {
    console.log(searchText);
    this.displayedCourses = this.courses.filter(c => c.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }
}
