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
var atividades_manutencao_component_1 = require('./atividades_manutencao.component');
var atividades_manutencao_routing_1 = require('./atividades_manutencao.routing');
var Atividades_manutencaoModule = (function () {
    function Atividades_manutencaoModule() {
    }
    Atividades_manutencaoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, atividades_manutencao_routing_1.atividades_manutencao_routing, shared_module_1.SharedModule], declarations: [atividades_manutencao_component_1.Atividades_manutencaoComponent], exports: [atividades_manutencao_component_1.Atividades_manutencaoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Atividades_manutencaoModule);
    return Atividades_manutencaoModule;
}());
exports.Atividades_manutencaoModule = Atividades_manutencaoModule;
//# sourceMappingURL=atividades_manutencao.module.js.map