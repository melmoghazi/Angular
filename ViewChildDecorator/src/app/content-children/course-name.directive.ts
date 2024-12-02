import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'course-name',
  standalone: true
})
export class CourseNameDirective {

  @Input({ required: true }) name!: string;

}
