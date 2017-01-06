"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_event_aggregator_1 = require('aurelia-event-aggregator');
var aurelia_dependency_injection_1 = require('aurelia-dependency-injection');
var au_paper_drawer_item_1 = require('./au-paper-drawer-item');
var aurelia_router_1 = require('aurelia-router');
var aurelia_framework_1 = require('aurelia-framework');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLENBQUM7UUFFakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUM1QiwyQkFBMkIsRUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFuRUQ7UUFBQyw0QkFBUSxDQUFDLHNCQUFzQixDQUFDOzsyREFBQTtJQUhuQztRQUFDLHlDQUFVOztxQkFBQTtJQXVFWCxvQkFBQzs7QUFBRCxDQXRFQSxBQXNFQyxJQUFBO0FBdEVZLHFCQUFhLGdCQXNFekIsQ0FBQSIsImZpbGUiOiJhdS1wYXBlci1kcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XHJcbmltcG9ydCB7IEF1UGFwZXJEcmF3ZXJJdGVtIH0gZnJvbSAnLi9hdS1wYXBlci1kcmF3ZXItaXRlbSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVDb25maWcsIE5hdmlnYXRpb25JbnN0cnVjdGlvbiwgTmV4dCwgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHsgYmluZGFibGUsIGNoaWxkcmVuIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIEF1UGFwZXJEcmF3ZXIge1xyXG5cclxuICBAY2hpbGRyZW4oXCJhdS1wYXBlci1kcmF3ZXItaXRlbVwiKVxyXG4gIHByaXZhdGUgcGFwZXJEcmF3ZXJJdGVtczogQXVQYXBlckRyYXdlckl0ZW1bXSA9IFtdO1xyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gRE9NIGVsZW1lbnQuIFxyXG4gIC8vIFVzZWQgdG8gYXV0b21hdGljYWxseSBjbG9zZSBkcmF3ZXIgYWZ0ZXIgbmF2aWdhdGluZyB0byBuZXcgcm91dGUuXHJcbiAgcHJpdmF0ZSBwYXBlckRyYXdlclBhbmVsOiBhbnk7XHJcblxyXG4gIHNlbGVjdGVkSXRlbUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgaWYgKHRoaXMucGFwZXJEcmF3ZXJJdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLmxvYWRGcm9tUm91dGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkRnJvbVJvdXRlcigpIHtcclxuICAgIHRoaXMucm91dGVyLnJvdXRlcy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAvLyBTa2lwIHJvdXRlcyB3aXRoIHBhcmFtZXRlcnNcclxuICAgICAgaWYgKHIucm91dGUuaW5kZXhPZignOicpID49IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGFwZXJEcmF3ZXJJdGVtcy5wdXNoKFxyXG4gICAgICAgIG5ldyBBdVBhcGVyRHJhd2VySXRlbShcclxuICAgICAgICAgIHIubmFtZSxcclxuICAgICAgICAgIHIudGl0bGUsXHJcbiAgICAgICAgICByWydpY29uJ11cclxuICAgICAgICApKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdG9Ubyhyb3V0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHJvdXRlc0J5TmFtZTogQXVQYXBlckRyYXdlckl0ZW1bXSA9IHRoaXMucGFwZXJEcmF3ZXJJdGVtcy5maWx0ZXIoaSA9PiBpLnJvdXRlTmFtZSA9PT0gcm91dGVOYW1lKTtcclxuXHJcbiAgICBpZiAocm91dGVzQnlOYW1lLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJvdXRlIGZvdW5kIHdpdGggbmFtZSAnXCIgKyByb3V0ZU5hbWUgK1xyXG4gICAgICAgIFwiJy4gSXMgcm91dGUgJ1wiICsgcm91dGVOYW1lICsgXCInIGNvbmZpZ3VyZWQgaW4geW91ciBhcHBsaWNhdGlvbiBSb3V0ZXI/XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3V0ZXNCeU5hbWUubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdWx0aXBsZSByb3V0ZXMgZm91bmQgd2l0aCBuYW1lICdcIiArIHJvdXRlTmFtZSArXHJcbiAgICAgICAgXCInLiBSb3V0ZXMgbXVzdCBiZSByZWdpc3RlcmVkIHdpdGggdW5pcXVlIG5hbWVzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcm91dGU6IEF1UGFwZXJEcmF3ZXJJdGVtID0gcm91dGVzQnlOYW1lWzBdO1xyXG5cclxuICAgIGxldCBwYXJhbXM6IGFueSA9IHR5cGVvZiByb3V0ZS5yb3V0ZVBhcmFtcyA9PSAnc3RyaW5nJyA/XHJcbiAgICAgIEpTT04ucGFyc2Uocm91dGUucm91dGVQYXJhbXMpIDogcm91dGUucm91dGVQYXJhbXM7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVUb1JvdXRlKHJvdXRlTmFtZSwgcGFyYW1zKTtcclxuICAgIHRoaXMucGFwZXJEcmF3ZXJQYW5lbC5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGlvblN1Y2Nlc3MoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGxldCBhY3RpdmVSb3V0ZTogUm91dGVDb25maWcgPSBldmVudC5pbnN0cnVjdGlvbi5jb25maWc7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbUluZGV4ID0gdGhpcy5yb3V0ZXIucm91dGVzLmluZGV4T2YoYWN0aXZlUm91dGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlTmF2aWdhdGlvblN0ZXAgLSBzZWxlY3RlZEl0ZW1JbmRleDogXCIgKyB0aGlzLnNlbGVjdGVkSXRlbUluZGV4KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoXHJcbiAgICAgICdyb3V0ZXI6bmF2aWdhdGlvbjpzdWNjZXNzJyxcclxuICAgICAgdGhpcy5uYXZpZ2F0aW9uU3VjY2Vzcy5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn1cclxuIl19
