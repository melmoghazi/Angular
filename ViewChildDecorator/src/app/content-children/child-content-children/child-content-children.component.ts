import { AfterViewInit, Component, ContentChildren, QueryList } from '@angular/core';
import { CourseNameDirective } from '../course-name.directive';

@Component({
  selector: 'app-child-content-children',
  standalone: true,
  imports: [],
  templateUrl: './child-content-children.component.html',
  styleUrl: './child-content-children.component.scss'
})
export class ChildContentChildrenComponent implements AfterViewInit {

  get getTop(): string {
    return this.top ? this.top.map((n) => n.name).join(' - ') : '';
  }
  get getNested(): string {
    return this.top ? this.nested.map((n) => n.name).join(' - ') : '';
  }

  @ContentChildren(CourseNameDirective) top!: QueryList<CourseNameDirective>;
  @ContentChildren(CourseNameDirective, {descendants:true}) nested!: QueryList<CourseNameDirective>;


  ngAfterViewInit(): void {
    //console.log('top', this.top);
    console.log('nested', this.top);

  }



}
