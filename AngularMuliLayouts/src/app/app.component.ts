import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGaurd } from './core/services/auth.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AuthGaurd]
})
export class AppComponent {
  title = 'AngularMuliLayouts';
}
