import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConfigurationListComponent } from './configuration/configuration-list.component';
import { ConfigurationService } from './configuration/configuration.service';
import { RestEndPoints } from './RestEndpoints';
import { HttpModule } from '@angular/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonModule, PanelModule } from 'primeng/primeng';
import { ConfigurationDetailComponent } from './configuration/configuration-detail.component';
import { Button } from 'selenium-webdriver';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationDetailComponent,
    ConfigurationListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpModule,
    NgxDatatableModule,
    PanelModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
