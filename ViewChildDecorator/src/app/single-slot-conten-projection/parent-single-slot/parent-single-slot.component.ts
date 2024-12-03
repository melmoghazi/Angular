import { Component } from '@angular/core';
import { SingleSlotComponent } from '../single-slot/single-slot.component';

@Component({
  selector: 'app-parent-single-slot',
  standalone: true,
  imports: [SingleSlotComponent],
  templateUrl: './parent-single-slot.component.html',
  styleUrl: './parent-single-slot.component.scss'
})
export class ParentSingleSlotComponent {

}
