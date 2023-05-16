import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onUpdateName() {
    this.userName = '';
  }

  protected readonly onmouseenter = onmouseenter;
}
