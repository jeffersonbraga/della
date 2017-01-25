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
var manutencao_preventiva_component_1 = require('./manutencao_preventiva.component');
var manutencao_preventiva_routing_1 = require('./manutencao_preventiva.routing');
var Manutencao_preventivaModule = (function () {
    function Manutencao_preventivaModule() {
    }
    Manutencao_preventivaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, manutencao_preventiva_routing_1.manutencao_preventiva_routing, shared_module_1.SharedModule], declarations: [manutencao_preventiva_component_1.Manutencao_preventivaComponent], exports: [manutencao_preventiva_component_1.Manutencao_preventivaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Manutencao_preventivaModule);
    return Manutencao_preventivaModule;
}());
exports.Manutencao_preventivaModule = Manutencao_preventivaModule;
//# sourceMappingURL=manutencao_preventiva.module.js.map