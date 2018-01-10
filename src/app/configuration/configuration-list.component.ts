import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { RestEndPoints } from '../RestEndpoints';
import { Configuration } from './configuration';

@Component({
  selector: 'configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})

export class ConfigurationListComponent {
    public configurations : Configuration[];

    constructor(private configService: ConfigurationService) {
    }

    ngOnInit() {
        this.configurations = this.configService.getConfigurations(RestEndPoints.download_host + "2");
    }
}