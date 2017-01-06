import { bindable } from 'aurelia-framework';

export class AuPaperDrawerItem {
  @bindable
  title: string;

  @bindable
  icon: string;
  
  @bindable
  routeName: string;

  @bindable
  routeParams: any;

  constructor( routeName: string, title: string, icon: string) {
    this.routeName = routeName;
    this.title = title;
    this.icon = icon;
  }
}
