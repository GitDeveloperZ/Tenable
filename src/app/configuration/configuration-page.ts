import { Configuration } from "./configuration";


export class ConfigurationPage {
    public pageCount = 10;
    public items = 0;
    public pageNumber = 0;
    public pages = 0;
}

export class PagedConfigurations {
    public configurations = new Array<Configuration>();
    public page = new ConfigurationPage();
}
