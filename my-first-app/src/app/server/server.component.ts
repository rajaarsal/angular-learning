import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
    // we can add style here too
    // styles: [`
    //     .online {
    //         color: white;
    //     }
    // `]
    
})

export class ServerComponent {
    serverId=  10;
    serverName = "";
    allowCreateServer = false;
    displayServer =  false;
    serverStatus=  'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    
    // Crete server on click
    createServer() {
        this.displayServer =  true;
    }

    // Show server name
    serverStatusText() {
        this.displayServer = false;
    }

    //Change color for online/offline server
    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}