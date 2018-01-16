import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ConfigurationPage, PagedConfigurations } from './configuration-page';

@Injectable()
export class ConfigurationService {

    constructor(private http: Http) {
    }

    getConfigurations(url: string, page: ConfigurationPage): Observable<PagedConfigurations> {
        const urls = url.split('=');

        return this.http
            .get('assets/configurations.json')
            .map(
                (res: Response) => this.getPagedConfigurations(res, page, urls[1])
        );
    }

    getPagedConfigurations(res: Response, page: ConfigurationPage, queryCount) {
        const pagedConfigs = new PagedConfigurations();
        page.items = queryCount;
        page.pages = page.items / page.pageCount;
        const begin = page.pageNumber * page.pageCount;
        const end = Math.min((begin + page.pageCount), page.items);
        for (let i = begin; i < end; i++) {
            pagedConfigs.configurations.push(res.json().configurations[i]);
        }
        pagedConfigs.page = page;
        return pagedConfigs;
    }
}
