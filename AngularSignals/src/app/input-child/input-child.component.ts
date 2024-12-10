import { Component, Input, input, model, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.css'
})
export class InputChildComponent {

  //@Input({required:true}) countDecorator!:number;
  //count input signal
  count = input(0, { transform: (value: number | string) => numberAttribute(value) });

  //input decorator
  @Input() isChecked: boolean = false;
  //signal model
  checked = model(false);
  //checked = model.required<boolean>();


  //checkedSignal = input(false);

  toggle(): void {
    this.isChecked = !this.isChecked;
    this.checked.set(!this.checked());
    //this.checkedSignal().set // can not set value in the input with signal use model instead.
  }

}
