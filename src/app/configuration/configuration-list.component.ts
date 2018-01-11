import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { RestEndPoints } from '../RestEndpoints';
import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})

export class ConfigurationListComponent implements OnInit {
    public configurations: Configuration[];

    constructor(private configService: ConfigurationService) {
    }

    ngOnInit() {
        this.configService.getConfigurations(RestEndPoints.download_host + '2')
        .subscribe(
           configs => this.configurations = configs
        );
    }
}
