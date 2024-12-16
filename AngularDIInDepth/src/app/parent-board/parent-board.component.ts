import { Component, Host } from '@angular/core';
import { ChildBoardComponent } from '../child-board/child-board.component';

@Component({
  selector: 'app-parent-board',
  standalone: true,
  imports: [ChildBoardComponent],
  templateUrl: './parent-board.component.html',
  styleUrl: './parent-board.component.scss'
})
export class ParentBoardComponent {
  //constructor(@Host() protected boardService:BoardService){}
}
