import { Component } from '@angular/core';

import { ChildContentChildrenComponent } from '../child-content-children/child-content-children.component';
import { CourseNameDirective } from '../course-name.directive';

@Component({
  selector: 'app-parent-content-children',
  standalone: true,
  imports: [ChildContentChildrenComponent, CourseNameDirective],
  templateUrl: './parent-content-children.component.html',
  styleUrl: './parent-content-children.component.scss'
})
export class ParentContentChildrenComponent {
  showNested = false;

  toggleShowNested(): void {
    this.showNested = !this.showNested;
  }
}
