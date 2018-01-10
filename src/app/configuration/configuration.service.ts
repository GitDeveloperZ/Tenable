import { Injectable } from "@angular/core"
import { CONFIGURATIONS } from '../../mock/configurations';
import { Configuration } from "./configuration";

@Injectable()
export class ConfigurationService{

    getConfigurations(url: string) : Configuration[] {
        console.log(url);
        let configurations: Configuration[] = CONFIGURATIONS['configurations'];
        return configurations;
    }
}