import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
