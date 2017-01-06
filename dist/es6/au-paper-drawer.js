var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-dependency-injection';
import { AuPaperDrawerItem } from './au-paper-drawer-item';
import { Router, RouterConfiguration } from 'aurelia-router';
import { children } from 'aurelia-framework';
export let AuPaperDrawer = class AuPaperDrawer {
    constructor(router, config, eventAggregator) {
        this.router = router;
        this.config = config;
        this.eventAggregator = eventAggregator;
        this.paperDrawerItems = [];
        this.selectedItemIndex = 0;
    }
    attached() {
        if (this.paperDrawerItems.length == 0) {
            this.loadFromRouter();
        }
    }
    loadFromRouter() {
        this.router.routes.forEach(r => {
            if (r.route.indexOf(':') >= 0) {
                return;
            }
            this.paperDrawerItems.push(new AuPaperDrawerItem(r.name, r.title, r['icon']));
        });
    }
    navigatoTo(routeName) {
        let routesByName = this.paperDrawerItems.filter(i => i.routeName === routeName);
        if (routesByName.length == 0) {
            throw new Error("No route found with name '" + routeName +
                "'. Is route '" + routeName + "' configured in your application Router?");
        }
        if (routesByName.length > 1) {
            throw new Error("Multiple routes found with name '" + routeName +
                "'. Routes must be registered with unique names.");
        }
        let route = routesByName[0];
        let params = typeof route.routeParams == 'string' ?
            JSON.parse(route.routeParams) : route.routeParams;
        this.router.navigateToRoute(routeName, params);
        this.paperDrawerPanel.closeDrawer();
    }
    navigationSuccess(event) {
        let activeRoute = event.instruction.config;
        this.selectedItemIndex = this.router.routes.indexOf(activeRoute);
        console.log("UpdateNavigationStep - selectedItemIndex: " + this.selectedItemIndex);
    }
    created() {
        this.eventAggregator.subscribe('router:navigation:success', this.navigationSuccess.bind(this));
    }
};
__decorate([
    children("au-paper-drawer-item"), 
    __metadata('design:type', Array)
], AuPaperDrawer.prototype, "paperDrawerItems", void 0);
AuPaperDrawer = __decorate([
    autoinject, 
    __metadata('design:paramtypes', [(typeof (_a = typeof Router !== 'undefined' && Router) === 'function' && _a) || Object, (typeof (_b = typeof RouterConfiguration !== 'undefined' && RouterConfiguration) === 'function' && _b) || Object, (typeof (_c = typeof EventAggregator !== 'undefined' && EventAggregator) === 'function' && _c) || Object])
], AuPaperDrawer);
var _a, _b, _c;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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NENBQTRDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDNUIsMkJBQTJCLEVBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0FBQ0gsQ0FBQztBQXBFQztJQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQzs7dURBQUE7QUFIbkM7SUFBQyxVQUFVOztpQkFBQTtBQXVFViIsImZpbGUiOiJhdS1wYXBlci1kcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IEF1UGFwZXJEcmF3ZXJJdGVtIH0gZnJvbSAnLi9hdS1wYXBlci1kcmF3ZXItaXRlbSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVDb25maWcsIE5hdmlnYXRpb25JbnN0cnVjdGlvbiwgTmV4dCwgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHsgYmluZGFibGUsIGNoaWxkcmVuIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIEF1UGFwZXJEcmF3ZXIge1xyXG5cclxuICBAY2hpbGRyZW4oXCJhdS1wYXBlci1kcmF3ZXItaXRlbVwiKVxyXG4gIHByaXZhdGUgcGFwZXJEcmF3ZXJJdGVtczogQXVQYXBlckRyYXdlckl0ZW1bXSA9IFtdO1xyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gRE9NIGVsZW1lbnQuIFxyXG4gIC8vIFVzZWQgdG8gYXV0b21hdGljYWxseSBjbG9zZSBkcmF3ZXIgYWZ0ZXIgbmF2aWdhdGluZyB0byBuZXcgcm91dGUuXHJcbiAgcHJpdmF0ZSBwYXBlckRyYXdlclBhbmVsOiBhbnk7XHJcblxyXG4gIHNlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgaWYgKHRoaXMucGFwZXJEcmF3ZXJJdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLmxvYWRGcm9tUm91dGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkRnJvbVJvdXRlcigpIHtcclxuICAgIHRoaXMucm91dGVyLnJvdXRlcy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAvLyBTa2lwIHJvdXRlcyB3aXRoIHBhcmFtZXRlcnNcclxuICAgICAgaWYgKHIucm91dGUuaW5kZXhPZignOicpID49IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFwZXJEcmF3ZXJJdGVtcy5wdXNoKFxyXG4gICAgICAgIG5ldyBBdVBhcGVyRHJhd2VySXRlbShcclxuICAgICAgICAgIHIubmFtZSxcclxuICAgICAgICAgIHIudGl0bGUsXHJcbiAgICAgICAgICByWydpY29uJ11cclxuICAgICAgICApKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdG9Ubyhyb3V0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHJvdXRlc0J5TmFtZTogQXVQYXBlckRyYXdlckl0ZW1bXSA9IHRoaXMucGFwZXJEcmF3ZXJJdGVtcy5maWx0ZXIoaSA9PiBpLnJvdXRlTmFtZSA9PT0gcm91dGVOYW1lKTtcclxuXHJcbiAgICBpZiAocm91dGVzQnlOYW1lLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJvdXRlIGZvdW5kIHdpdGggbmFtZSAnXCIgKyByb3V0ZU5hbWUgK1xyXG4gICAgICAgIFwiJy4gSXMgcm91dGUgJ1wiICsgcm91dGVOYW1lICsgXCInIGNvbmZpZ3VyZWQgaW4geW91ciBhcHBsaWNhdGlvbiBSb3V0ZXI/XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3V0ZXNCeU5hbWUubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdWx0aXBsZSByb3V0ZXMgZm91bmQgd2l0aCBuYW1lICdcIiArIHJvdXRlTmFtZSArXHJcbiAgICAgICAgXCInLiBSb3V0ZXMgbXVzdCBiZSByZWdpc3RlcmVkIHdpdGggdW5pcXVlIG5hbWVzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcm91dGU6IEF1UGFwZXJEcmF3ZXJJdGVtID0gcm91dGVzQnlOYW1lWzBdO1xyXG5cclxuICAgIGxldCBwYXJhbXM6IGFueSA9IHR5cGVvZiByb3V0ZS5yb3V0ZVBhcmFtcyA9PSAnc3RyaW5nJyA/XHJcbiAgICAgIEpTT04ucGFyc2Uocm91dGUucm91dGVQYXJhbXMpIDogcm91dGUucm91dGVQYXJhbXM7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKHJvdXRlTmFtZSwgcGFyYW1zKTtcclxuICAgIHRoaXMucGFwZXJEcmF3ZXJQYW5lbC5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGlvblN1Y2Nlc3MoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGxldCBhY3RpdmVSb3V0ZTogUm91dGVDb25maWcgPSBldmVudC5pbnN0cnVjdGlvbi5jb25maWc7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gdGhpcy5yb3V0ZXIucm91dGVzLmluZGV4T2YoYWN0aXZlUm91dGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlTmF2aWdhdGlvblN0ZXAgLSBzZWxlY3RlZEl0ZW1JbmRleDogXCIgKyB0aGlzLnNlbGVjdGVkSXRlbUluZGV4KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoXHJcbiAgICAgICdyb3V0ZXI6bmF2aWdhdGlvbjpzdWNjZXNzJyxcclxuICAgICAgdGhpcy5uYXZpZ2F0aW9uU3VjY2Vzcy5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn1cclxuIl19
