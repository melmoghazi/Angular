import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgTemplateOutlet, JsonPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  
  cardBodyTemp = input<TemplateRef<HTMLElement>>();

  course:{title:string,lessons:number}={
    title:'Angualr 16 Course',lessons:20
  }
}
