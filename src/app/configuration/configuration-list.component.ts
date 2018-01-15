import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { RestEndPoints } from '../RestEndpoints';
import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';
import { ConfigurationDetailComponent } from './configuration-detail.component';

@Component({
  selector: 'configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})

export class ConfigurationListComponent implements OnInit {

    public configurations: Configuration[];
    public selectedConfigurations: Configuration[] = [];
    public showDetails = false;

    columns = [
        { prop: 'name' },
        { name: 'Hostname' },
        { name: 'Port', sortable: false },
        { name: 'Username'}
    ];

    constructor(private configService: ConfigurationService) {
    }

    ngOnInit() {
        this.configService.getConfigurations(RestEndPoints.download_host + '2')
        .subscribe(
           configs => this.configurations = configs
        );
    }

    configurationSelect(selected) {
        this.selectedConfigurations = selected;
        this.showDetails = true;
    }

    closeDetailsPanel() {
        this.showDetails = false;
        this.selectedConfigurations = [];
    }
}
