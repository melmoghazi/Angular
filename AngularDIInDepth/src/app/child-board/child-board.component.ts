import { Component, Optional, Self, SkipSelf } from '@angular/core';

import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-child-board',
  standalone: true,
  imports: [],
  templateUrl: './child-board.component.html',
  styleUrl: './child-board.component.scss',
  providers:[BoardService]
})
export class ChildBoardComponent {

  //constructor(@Optional() protected boardService:BoardService){}

  //constructor(@Self() protected boardService:BoardService){} 
  //@Self() must be injected inside the same element so use providers:[BoardService]
  //can compine beteen @Self() and @Optional() constructor(@Self() @Optional() protected boardService:BoardService){} 
  
  //constructor(@SkipSelf() protected boardService:BoardService){}

  
}
