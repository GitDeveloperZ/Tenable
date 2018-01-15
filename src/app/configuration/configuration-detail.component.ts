import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Configuration } from './configuration';

@Component({
  selector: 'configuration-detail',
  templateUrl: './configuration-detail.component.html',
  styleUrls: ['./configuration-detail.component.css']
})

export class ConfigurationDetailComponent implements OnChanges {
    @Input() config: any;
    @Output() detailClose: EventEmitter<any> = new EventEmitter();
    public configurations: Configuration[] = [];

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        const config: SimpleChange = changes.config;
        if (config) {
            this.configurations = config.currentValue.selected;
        }
   }

   closeDetail() {
       this.detailClose.emit('close');
   }
}
