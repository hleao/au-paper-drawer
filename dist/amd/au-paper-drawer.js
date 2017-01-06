var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-event-aggregator', 'aurelia-dependency-injection', './au-paper-drawer-item', 'aurelia-router', 'aurelia-framework'], function (require, exports, aurelia_event_aggregator_1, aurelia_dependency_injection_1, au_paper_drawer_item_1, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    var AuPaperDrawer = (function () {
        function AuPaperDrawer(router, config, eventAggregator) {
            this.router = router;
            this.config = config;
            this.eventAggregator = eventAggregator;
            this.paperDrawerItems = [];
            this.selectedItemIndex = 0;
        }
        AuPaperDrawer.prototype.attached = function () {
            if (this.paperDrawerItems.length == 0) {
                this.loadFromRouter();
            }
        };
        AuPaperDrawer.prototype.loadFromRouter = function () {
            var _this = this;
            this.router.routes.forEach(function (r) {
                if (r.route.indexOf(':') >= 0) {
                    return;
                }
                _this.paperDrawerItems.push(new au_paper_drawer_item_1.AuPaperDrawerItem(r.name, r.title, r['icon']));
            });
        };
        AuPaperDrawer.prototype.navigatoTo = function (routeName) {
            var routesByName = this.paperDrawerItems.filter(function (i) { return i.routeName === routeName; });
            if (routesByName.length == 0) {
                throw new Error("No route found with name '" + routeName +
                    "'. Is route '" + routeName + "' configured in your application Router?");
            }
            if (routesByName.length > 1) {
                throw new Error("Multiple routes found with name '" + routeName +
                    "'. Routes must be registered with unique names.");
            }
            var route = routesByName[0];
            var params = typeof route.routeParams == 'string' ?
                JSON.parse(route.routeParams) : route.routeParams;
            this.router.navigateToRoute(routeName, params);
            this.paperDrawerPanel.closeDrawer();
        };
        AuPaperDrawer.prototype.navigationSuccess = function (event) {
            var activeRoute = event.instruction.config;
            this.selectedItemIndex = this.router.routes.indexOf(activeRoute);
            console.log("UpdateNavigationStep - selectedItemIndex: " + this.selectedItemIndex);
        };
        AuPaperDrawer.prototype.created = function () {
            this.eventAggregator.subscribe('router:navigation:success', this.navigationSuccess.bind(this));
        };
        __decorate([
            aurelia_framework_1.children("au-paper-drawer-item"), 
            __metadata('design:type', Array)
        ], AuPaperDrawer.prototype, "paperDrawerItems", void 0);
        AuPaperDrawer = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_router_1.Router !== 'undefined' && aurelia_router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof aurelia_router_1.RouterConfiguration !== 'undefined' && aurelia_router_1.RouterConfiguration) === 'function' && _b) || Object, (typeof (_c = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _c) || Object])
        ], AuPaperDrawer);
        return AuPaperDrawer;
        var _a, _b, _c;
    }());
    exports.AuPaperDrawer = AuPaperDrawer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QixFQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQW5FRDtZQUFDLDRCQUFRLENBQUMsc0JBQXNCLENBQUM7OytEQUFBO1FBSG5DO1lBQUMseUNBQVU7O3lCQUFBO1FBdUVYLG9CQUFDOztJQUFELENBdEVBLEFBc0VDLElBQUE7SUF0RVkscUJBQWEsZ0JBc0V6QixDQUFBIiwiZmlsZSI6ImF1LXBhcGVyLWRyYXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuaW1wb3J0IHsgQXVQYXBlckRyYXdlckl0ZW0gfSBmcm9tICcuL2F1LXBhcGVyLWRyYXdlci1pdGVtJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZUNvbmZpZywgTmF2aWdhdGlvbkluc3RydWN0aW9uLCBOZXh0LCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBiaW5kYWJsZSwgY2hpbGRyZW4gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQXVQYXBlckRyYXdlciB7XHJcblxyXG4gIEBjaGlsZHJlbihcImF1LXBhcGVyLWRyYXdlci1pdGVtXCIpXHJcbiAgcHJpdmF0ZSBwYXBlckRyYXdlckl0ZW1zOiBBdVBhcGVyRHJhd2VySXRlbVtdID0gW107XHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byBET00gZWxlbWVudC4gXHJcbiAgLy8gVXNlZCB0byBhdXRvbWF0aWNhbGx5IGNsb3NlIGRyYXdlciBhZnRlciBuYXZpZ2F0aW5nIHRvIG5ldyByb3V0ZS5cclxuICBwcml2YXRlIHBhcGVyRHJhd2VyUGFuZWw6IGFueTtcclxuXHJcbiAgc2VsZWN0ZWRJdGVtSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICBpZiAodGhpcy5wYXBlckRyYXdlckl0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMubG9hZEZyb21Sb3V0ZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRGcm9tUm91dGVyKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIucm91dGVzLmZvckVhY2gociA9PiB7XHJcbiAgICAgIC8vIFNraXAgcm91dGVzIHdpdGggcGFyYW1ldGVyc1xyXG4gICAgICBpZiAoci5yb3V0ZS5pbmRleE9mKCc6JykgPj0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wYXBlckRyYXdlckl0ZW1zLnB1c2goXHJcbiAgICAgICAgbmV3IEF1UGFwZXJEcmF3ZXJJdGVtKFxyXG4gICAgICAgICAgci5uYW1lLFxyXG4gICAgICAgICAgci50aXRsZSxcclxuICAgICAgICAgIHJbJ2ljb24nXVxyXG4gICAgICAgICkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0b1RvKHJvdXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgcm91dGVzQnlOYW1lOiBBdVBhcGVyRHJhd2VySXRlbVtdID0gdGhpcy5wYXBlckRyYXdlckl0ZW1zLmZpbHRlcihpID0+IGkucm91dGVOYW1lID09PSByb3V0ZU5hbWUpO1xyXG5cclxuICAgIGlmIChyb3V0ZXNCeU5hbWUubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcm91dGUgZm91bmQgd2l0aCBuYW1lICdcIiArIHJvdXRlTmFtZSArXHJcbiAgICAgICAgXCInLiBJcyByb3V0ZSAnXCIgKyByb3V0ZU5hbWUgKyBcIicgY29uZmlndXJlZCBpbiB5b3VyIGFwcGxpY2F0aW9uIFJvdXRlcj9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdXRlc0J5TmFtZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11bHRpcGxlIHJvdXRlcyBmb3VuZCB3aXRoIG5hbWUgJ1wiICsgcm91dGVOYW1lICtcclxuICAgICAgICBcIicuIFJvdXRlcyBtdXN0IGJlIHJlZ2lzdGVyZWQgd2l0aCB1bmlxdWUgbmFtZXMuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByb3V0ZTogQXVQYXBlckRyYXdlckl0ZW0gPSByb3V0ZXNCeU5hbWVbMF07XHJcblxyXG4gICAgbGV0IHBhcmFtczogYW55ID0gdHlwZW9mIHJvdXRlLnJvdXRlUGFyYW1zID09ICdzdHJpbmcnID9cclxuICAgICAgSlNPTi5wYXJzZShyb3V0ZS5yb3V0ZVBhcmFtcykgOiByb3V0ZS5yb3V0ZVBhcmFtcztcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUocm91dGVOYW1lLCBwYXJhbXMpO1xyXG4gICAgdGhpcy5wYXBlckRyYXdlclBhbmVsLmNsb3NlRHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0aW9uU3VjY2VzcyhldmVudDogYW55KSB7XHJcblxyXG4gICAgbGV0IGFjdGl2ZVJvdXRlOiBSb3V0ZUNvbmZpZyA9IGV2ZW50Lmluc3RydWN0aW9uLmNvbmZpZztcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXggPSB0aGlzLnJvdXRlci5yb3V0ZXMuaW5kZXhPZihhY3RpdmVSb3V0ZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJVcGRhdGVOYXZpZ2F0aW9uU3RlcCAtIHNlbGVjdGVkSXRlbUluZGV4OiBcIiArIHRoaXMuc2VsZWN0ZWRJdGVtSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShcclxuICAgICAgJ3JvdXRlcjpuYXZpZ2F0aW9uOnN1Y2Nlc3MnLFxyXG4gICAgICB0aGlzLm5hdmlnYXRpb25TdWNjZXNzLmJpbmQodGhpcykpO1xyXG4gIH1cclxufVxyXG4iXX0=
