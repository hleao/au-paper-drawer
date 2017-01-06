System.register(['aurelia-framework'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var AuPaperDrawerItem;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            AuPaperDrawerItem = (function () {
                function AuPaperDrawerItem(routeName, title, icon) {
                    this.routeName = routeName;
                    this.title = title;
                    this.icon = icon;
                }
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], AuPaperDrawerItem.prototype, "title", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], AuPaperDrawerItem.prototype, "icon", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], AuPaperDrawerItem.prototype, "routeName", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Object)
                ], AuPaperDrawerItem.prototype, "routeParams", void 0);
                return AuPaperDrawerItem;
            }());
            exports_1("AuPaperDrawerItem", AuPaperDrawerItem);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1LXBhcGVyLWRyYXdlci1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBYUUsMkJBQWEsU0FBaUIsRUFBRSxLQUFhLEVBQUUsSUFBWTtvQkFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbkIsQ0FBQztnQkFoQkQ7b0JBQUMsNEJBQVE7O2dFQUFBO2dCQUdUO29CQUFDLDRCQUFROzsrREFBQTtnQkFHVDtvQkFBQyw0QkFBUTs7b0VBQUE7Z0JBR1Q7b0JBQUMsNEJBQVE7O3NFQUFBO2dCQVFYLHdCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxpREFrQkMsQ0FBQSIsImZpbGUiOiJhdS1wYXBlci1kcmF3ZXItaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1UGFwZXJEcmF3ZXJJdGVtIHtcclxuICBAYmluZGFibGVcclxuICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBAYmluZGFibGVcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgXHJcbiAgQGJpbmRhYmxlXHJcbiAgcm91dGVOYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBiaW5kYWJsZVxyXG4gIHJvdXRlUGFyYW1zOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCByb3V0ZU5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgaWNvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvdXRlTmFtZSA9IHJvdXRlTmFtZTtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuaWNvbiA9IGljb247XHJcbiAgfVxyXG59XHJcbiJdfQ==
