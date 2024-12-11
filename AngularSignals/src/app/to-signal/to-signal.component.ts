import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-to-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-signal.component.html',
  styleUrl: './to-signal.component.css'
})
export class ToSignalComponent {

  counter$ = interval(1000);
  counter = toSignal(this.counter$, { initialValue: 0 });
}
