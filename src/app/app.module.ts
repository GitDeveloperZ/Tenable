import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConfigurationListComponent } from './configuration/configuration-list.component';
import { ConfigurationService } from './configuration/configuration.service';
import { RestEndPoints } from './RestEndpoints';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
