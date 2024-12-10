import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  counter: number = 0;
  increment() {
    this.counter++;
  }


  signalCounter = signal(0);
  signalIncrement() {
    this.signalCounter.set(this.signalCounter() + 1);
  }
}
