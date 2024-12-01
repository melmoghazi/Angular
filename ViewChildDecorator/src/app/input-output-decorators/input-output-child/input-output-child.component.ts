import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  standalone: true,
  imports: [],
  templateUrl: './input-output-child.component.html',
  styleUrl: './input-output-child.component.scss'
})
export class InputOutputChildComponent implements OnInit{
  
  //input decorator
  @Input() inputFromParent: string = '';

  //output decorator
  @Output() updateName = new EventEmitter<string>();
  name: string = 'this output name string from child to parent';

  ngOnInit(): void {
    this.updateName.emit('Child Name');
  }
  postData() {
    this.updateName.emit(this.name);
  }

}
