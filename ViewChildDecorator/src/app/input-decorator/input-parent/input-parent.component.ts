import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';

@Component({
  selector: 'app-input-parent',
  standalone: true,
  imports: [InputChildComponent],
  templateUrl: './input-parent.component.html',
  styleUrl: './input-parent.component.scss'
})
export class InputParentComponent {
  childTitle:string='this is child title';
  childFirstName:string='this is child first name';
  childLastName:string='this is child last name';
}
