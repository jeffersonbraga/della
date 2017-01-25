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
var formulario_indicador_component_1 = require('./formulario_indicador.component');
var formulario_indicador_routing_1 = require('./formulario_indicador.routing');
var Formulario_indicadorModule = (function () {
    function Formulario_indicadorModule() {
    }
    Formulario_indicadorModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, formulario_indicador_routing_1.formulario_indicador_routing, shared_module_1.SharedModule], declarations: [formulario_indicador_component_1.Formulario_indicadorComponent], exports: [formulario_indicador_component_1.Formulario_indicadorComponent] }), 
        __metadata('design:paramtypes', [])
    ], Formulario_indicadorModule);
    return Formulario_indicadorModule;
}());
exports.Formulario_indicadorModule = Formulario_indicadorModule;
//# sourceMappingURL=formulario_indicador.module.js.map