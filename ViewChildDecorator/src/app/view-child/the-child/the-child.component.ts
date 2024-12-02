import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-the-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './the-child.component.html',
  styleUrl: './the-child.component.scss'
})
export class TheChildComponent {
  name: string = 'Mohammed';

  title: string = 'this is title.';
  person: Person = { id: 1, firstName: 'Mohammed', lastName: 'Ali' }
}


export class Person {
  id!: number;
  firstName!: string;
  lastName!: string;
}