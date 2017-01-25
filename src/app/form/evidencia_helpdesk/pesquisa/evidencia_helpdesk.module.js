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
var evidencia_helpdesk_component_1 = require('./evidencia_helpdesk.component');
var evidencia_helpdesk_routing_1 = require('./evidencia_helpdesk.routing');
var Evidencia_helpdeskModule = (function () {
    function Evidencia_helpdeskModule() {
    }
    Evidencia_helpdeskModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, evidencia_helpdesk_routing_1.evidencia_helpdesk_routing, shared_module_1.SharedModule], declarations: [evidencia_helpdesk_component_1.Evidencia_helpdeskComponent], exports: [evidencia_helpdesk_component_1.Evidencia_helpdeskComponent] }), 
        __metadata('design:paramtypes', [])
    ], Evidencia_helpdeskModule);
    return Evidencia_helpdeskModule;
}());
exports.Evidencia_helpdeskModule = Evidencia_helpdeskModule;
//# sourceMappingURL=evidencia_helpdesk.module.js.map