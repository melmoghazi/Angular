import { Component } from '@angular/core';
import { ChildContentChildComponent } from "../child-content-child/child-content-child.component";

@Component({
  selector: 'app-parent-content-child',
  standalone: true,
  imports: [ChildContentChildComponent],
  templateUrl: './parent-content-child.component.html',
  styleUrl: './parent-content-child.component.scss'
})
export class ParentContentChildComponent {

}
