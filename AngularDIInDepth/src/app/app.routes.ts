import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ParentBoardComponent } from './parent-board/parent-board.component';

export const routes: Routes = [
    {
        path: 'board',
        component: BoardComponent
    },
    {
        path: 'parent-board',
        component: ParentBoardComponent
    }
];
