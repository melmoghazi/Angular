import { Component } from '@angular/core';
import { InputOutputChildComponent } from '../input-output-child/input-output-child.component';

@Component({
  selector: 'app-input-output-parent',
  standalone: true,
  imports: [InputOutputChildComponent],
  templateUrl: './input-output-parent.component.html',
  styleUrl: './input-output-parent.component.scss'
})
export class InputOutputParentComponent {
  fromParent: string = 'from parent string';
  toChild: string = "input from parent to child";
  
  outputFromChild: string = '';

  getData(name: string) {
    this.outputFromChild = name;
    console.log(name);
  }
}
