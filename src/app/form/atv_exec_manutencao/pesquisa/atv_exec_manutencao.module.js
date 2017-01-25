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
var atv_exec_manutencao_component_1 = require('./atv_exec_manutencao.component');
var atv_exec_manutencao_routing_1 = require('./atv_exec_manutencao.routing');
var Atv_exec_manutencaoModule = (function () {
    function Atv_exec_manutencaoModule() {
    }
    Atv_exec_manutencaoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, atv_exec_manutencao_routing_1.atv_exec_manutencao_routing, shared_module_1.SharedModule], declarations: [atv_exec_manutencao_component_1.Atv_exec_manutencaoComponent], exports: [atv_exec_manutencao_component_1.Atv_exec_manutencaoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Atv_exec_manutencaoModule);
    return Atv_exec_manutencaoModule;
}());
exports.Atv_exec_manutencaoModule = Atv_exec_manutencaoModule;
//# sourceMappingURL=atv_exec_manutencao.module.js.map