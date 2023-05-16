import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {}

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2) {
      this.oddNumbers.push(firedNumber);
    } else {
      this.evenNumbers.push(firedNumber);
    }
  }
}
