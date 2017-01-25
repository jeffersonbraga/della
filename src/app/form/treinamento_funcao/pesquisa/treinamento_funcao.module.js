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
var treinamento_funcao_component_1 = require('./treinamento_funcao.component');
var treinamento_funcao_routing_1 = require('./treinamento_funcao.routing');
var Treinamento_funcaoModule = (function () {
    function Treinamento_funcaoModule() {
    }
    Treinamento_funcaoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, treinamento_funcao_routing_1.treinamento_funcao_routing, shared_module_1.SharedModule], declarations: [treinamento_funcao_component_1.Treinamento_funcaoComponent], exports: [treinamento_funcao_component_1.Treinamento_funcaoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Treinamento_funcaoModule);
    return Treinamento_funcaoModule;
}());
exports.Treinamento_funcaoModule = Treinamento_funcaoModule;
//# sourceMappingURL=treinamento_funcao.module.js.map