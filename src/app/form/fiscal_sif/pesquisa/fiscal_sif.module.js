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
var fiscal_sif_component_1 = require('./fiscal_sif.component');
var fiscal_sif_routing_1 = require('./fiscal_sif.routing');
var Fiscal_sifModule = (function () {
    function Fiscal_sifModule() {
    }
    Fiscal_sifModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, fiscal_sif_routing_1.fiscal_sif_routing, shared_module_1.SharedModule], declarations: [fiscal_sif_component_1.Fiscal_sifComponent], exports: [fiscal_sif_component_1.Fiscal_sifComponent] }), 
        __metadata('design:paramtypes', [])
    ], Fiscal_sifModule);
    return Fiscal_sifModule;
}());
exports.Fiscal_sifModule = Fiscal_sifModule;
//# sourceMappingURL=fiscal_sif.module.js.map