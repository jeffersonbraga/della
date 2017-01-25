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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var shared_module_1 = require('../../../shared/shared.module');
var bug_report_component_1 = require('./bug_report.component');
var bug_report_routing_1 = require('./bug_report.routing');
var Bug_reportModule = (function () {
    function Bug_reportModule() {
    }
    Bug_reportModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, bug_report_routing_1.bug_report_routing, shared_module_1.SharedModule], declarations: [bug_report_component_1.Bug_reportComponent], exports: [bug_report_component_1.Bug_reportComponent] }), 
        __metadata('design:paramtypes', [])
    ], Bug_reportModule);
    return Bug_reportModule;
}());
exports.Bug_reportModule = Bug_reportModule;
//# sourceMappingURL=bug_report.module.js.map