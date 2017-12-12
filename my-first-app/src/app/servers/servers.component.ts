import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreateStatus = 'No server was created';
  serverName = 'Test';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreateStatus = 'Server was created and server name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

}
