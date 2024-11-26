import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-araccount',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './araccount.component.html',
  styleUrl: './araccount.component.scss'
})
export class ARAccountComponent {

}
