import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent} from './warningalert/warning-alert.compentnt';
import { SuccessalertComponent } from './successalert/successalert.component';
import { SenconassingmentComponent } from './senconassingment/senconassingment.component';
import { ThirdAssingmentComponent } from './third-assingment/third-assingment.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SuccessalertComponent,
    SenconassingmentComponent,
    ThirdAssingmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
