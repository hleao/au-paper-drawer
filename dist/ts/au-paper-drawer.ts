import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-dependency-injection';
import { AuPaperDrawerItem } from './au-paper-drawer-item';
import { Router, RouteConfig, NavigationInstruction, Next, RouterConfiguration } from 'aurelia-router';
import { bindable, children } from 'aurelia-framework';

@autoinject
export class AuPaperDrawer {

  @children("au-paper-drawer-item")
  private paperDrawerItems: AuPaperDrawerItem[] = [];

  // Reference to DOM element. 
  // Used to automatically close drawer after navigating to new route.
  private paperDrawerPanel: any;

  selectedItemIndex: number = 0;

  constructor(private router: Router, private config: RouterConfiguration, private eventAggregator: EventAggregator) { }

  attached() {
    if (this.paperDrawerItems.length == 0) {
      this.loadFromRouter();
    }
  }

  loadFromRouter() {
    this.router.routes.forEach(r => {
      // Skip routes with parameters
      if (r.route.indexOf(':') >= 0) {
        return;
      }

      this.paperDrawerItems.push(
        new AuPaperDrawerItem(
          r.name,
          r.title,
          r['icon']
        ));
    });
  }

  navigatoTo(routeName: string): void {
    let routesByName: AuPaperDrawerItem[] = this.paperDrawerItems.filter(i => i.routeName === routeName);

    if (routesByName.length == 0) {
      throw new Error("No route found with name '" + routeName +
        "'. Is route '" + routeName + "' configured in your application Router?");
    }

    if (routesByName.length > 1) {
      throw new Error("Multiple routes found with name '" + routeName +
        "'. Routes must be registered with unique names.");
    }

    let route: AuPaperDrawerItem = routesByName[0];

    let params: any = typeof route.routeParams == 'string' ?
      JSON.parse(route.routeParams) : route.routeParams;

    this.router.navigateToRoute(routeName, params);
    this.paperDrawerPanel.closeDrawer();
  }

  navigationSuccess(event: any) {

    let activeRoute: RouteConfig = event.instruction.config;
    this.selectedItemIndex = this.router.routes.indexOf(activeRoute);

    console.log("UpdateNavigationStep - selectedItemIndex: " + this.selectedItemIndex);
  }

  created() {
    this.eventAggregator.subscribe(
      'router:navigation:success',
      this.navigationSuccess.bind(this));
  }
}
