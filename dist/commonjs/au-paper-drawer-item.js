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
var aurelia_framework_1 = require('aurelia-framework');
var AuPaperDrawerItem = (function () {
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
exports.AuPaperDrawerItem = AuPaperDrawerItem;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1LXBhcGVyLWRyYXdlci1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUU3QztJQWFFLDJCQUFhLFNBQWlCLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQWhCRDtRQUFDLDRCQUFROztvREFBQTtJQUdUO1FBQUMsNEJBQVE7O21EQUFBO0lBR1Q7UUFBQyw0QkFBUTs7d0RBQUE7SUFHVDtRQUFDLDRCQUFROzswREFBQTtJQVFYLHdCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSx5QkFBaUIsb0JBa0I3QixDQUFBIiwiZmlsZSI6ImF1LXBhcGVyLWRyYXdlci1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXVQYXBlckRyYXdlckl0ZW0ge1xyXG4gIEBiaW5kYWJsZVxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIEBiaW5kYWJsZVxyXG4gIGljb246IHN0cmluZztcclxuICBcclxuICBAYmluZGFibGVcclxuICByb3V0ZU5hbWU6IHN0cmluZztcclxuXHJcbiAgQGJpbmRhYmxlXHJcbiAgcm91dGVQYXJhbXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHJvdXRlTmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpY29uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucm91dGVOYW1lID0gcm91dGVOYW1lO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5pY29uID0gaWNvbjtcclxuICB9XHJcbn1cclxuIl19
