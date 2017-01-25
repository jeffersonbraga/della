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
var permissao_indicador_component_1 = require('./permissao_indicador.component');
var permissao_indicador_routing_1 = require('./permissao_indicador.routing');
var Permissao_indicadorModule = (function () {
    function Permissao_indicadorModule() {
    }
    Permissao_indicadorModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, permissao_indicador_routing_1.permissao_indicador_routing, shared_module_1.SharedModule], declarations: [permissao_indicador_component_1.Permissao_indicadorComponent], exports: [permissao_indicador_component_1.Permissao_indicadorComponent] }), 
        __metadata('design:paramtypes', [])
    ], Permissao_indicadorModule);
    return Permissao_indicadorModule;
}());
exports.Permissao_indicadorModule = Permissao_indicadorModule;
//# sourceMappingURL=permissao_indicador.module.js.map