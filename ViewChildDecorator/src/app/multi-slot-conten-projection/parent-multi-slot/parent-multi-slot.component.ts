import { Component } from '@angular/core';
import { MultiSlotComponent } from '../multi-slot/multi-slot.component';

@Component({
  selector: 'app-parent-multi-slot',
  standalone: true,
  imports: [MultiSlotComponent],
  templateUrl: './parent-multi-slot.component.html',
  styleUrl: './parent-multi-slot.component.scss'
})
export class ParentMultiSlotComponent {

}
