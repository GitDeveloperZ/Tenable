import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { RestEndPoints } from '../RestEndpoints';
import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';
import { ConfigurationDetailComponent } from './configuration-detail.component';
import { ConfigurationPage } from './configuration-page';

@Component({
  selector: 'configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.css']
})

export class ConfigurationListComponent implements OnInit {

    public configurations: Configuration[];
    public selectedConfigurations: Configuration[] = [];
    public showDetails = false;
    public page = new ConfigurationPage();

    columns = [
        { prop: 'name' },
        { name: 'Hostname' },
        { name: 'Port', sortable: false },
        { name: 'Username'}
    ];

    constructor(private configService: ConfigurationService) {
        this.page.pageNumber = 0;
    }

    ngOnInit() {
        this.getPage({ offset: 0 });
    }

    configurationSelect(selected) {
        this.selectedConfigurations = selected;
        this.showDetails = true;
    }

    closeDetailsPanel() {
        this.showDetails = false;
        this.selectedConfigurations = [];
    }

    getPage(page) {
        this.page.pageNumber = page.offset;
        this.configService.getConfigurations(RestEndPoints.download_host + '100', this.page)
            .subscribe( pagedConfigs => {
                this.page = pagedConfigs.page;
                this.configurations = pagedConfigs.configurations;
        });
    }
}
