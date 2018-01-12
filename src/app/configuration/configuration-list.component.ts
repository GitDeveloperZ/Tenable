import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { RestEndPoints } from '../RestEndpoints';
import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';

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
        this.configService.getConfigurations(RestEndPoints.download_host + '4')
        .subscribe(
           configs => this.configurations = configs
        );

        $(function() {
           // Set table style
           $('table').css('width', '100%');
           $('table').css('border-collapse', 'collapse');

           // Set table heading and content
           const elements: string[] = ['td', 'th'];
           $.each(elements, function(index, element){
                $(element).css('border', '1px solid #dddddd');
                $(element).css('padding', '4px');
                $(element).css('text-align', 'left');
                if (element === 'th') {
                    $(element).css('background-color', '#1ABC9C');
                }
           });

           // Set row styling
           $('tr:nth-child(odd)').css('background-color', '#D1F2EB');
        });
    }

    deleteConfiguration(index: number): void {
        // Simulate delete by hiding config row
        $('#configTableRow' + index).hide();
    }
}
