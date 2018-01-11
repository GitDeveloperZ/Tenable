import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Configuration } from './configuration';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigurationService {

    constructor(private http: Http) {
    }

    getConfigurations(url: string): Observable<Configuration[]> {
        return this.http
            .get('assets/configurations.json')
            .map(
                (res: Response) => res.json().configurations
            );
    }
}
