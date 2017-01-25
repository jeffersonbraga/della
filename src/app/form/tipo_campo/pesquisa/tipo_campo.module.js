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
var tipo_campo_component_1 = require('./tipo_campo.component');
var tipo_campo_routing_1 = require('./tipo_campo.routing');
var Tipo_campoModule = (function () {
    function Tipo_campoModule() {
    }
    Tipo_campoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, tipo_campo_routing_1.tipo_campo_routing, shared_module_1.SharedModule], declarations: [tipo_campo_component_1.Tipo_campoComponent], exports: [tipo_campo_component_1.Tipo_campoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Tipo_campoModule);
    return Tipo_campoModule;
}());
exports.Tipo_campoModule = Tipo_campoModule;
//# sourceMappingURL=tipo_campo.module.js.map