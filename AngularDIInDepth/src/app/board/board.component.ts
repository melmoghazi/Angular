import { Component } from '@angular/core';
import { ParentBoardComponent } from '../parent-board/parent-board.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ParentBoardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}
