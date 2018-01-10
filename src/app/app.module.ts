import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConfigurationListComponent } from './configuration/configuration-list.component';
import { ConfigurationService } from './configuration/configuration.service';
import { RestEndPoints } from './RestEndpoints';


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
