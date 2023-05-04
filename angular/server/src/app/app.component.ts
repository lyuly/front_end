import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a test!' },
  ];

  receiveServerElements(element: {
    type: string;
    name: string;
    content: string;
  }) {
    this.serverElements.push(element);
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
}
