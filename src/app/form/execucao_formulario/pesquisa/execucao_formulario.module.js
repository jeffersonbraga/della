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
var execucao_formulario_component_1 = require('./execucao_formulario.component');
var execucao_formulario_routing_1 = require('./execucao_formulario.routing');
var Execucao_formularioModule = (function () {
    function Execucao_formularioModule() {
    }
    Execucao_formularioModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, execucao_formulario_routing_1.execucao_formulario_routing, shared_module_1.SharedModule], declarations: [execucao_formulario_component_1.Execucao_formularioComponent], exports: [execucao_formulario_component_1.Execucao_formularioComponent] }), 
        __metadata('design:paramtypes', [])
    ], Execucao_formularioModule);
    return Execucao_formularioModule;
}());
exports.Execucao_formularioModule = Execucao_formularioModule;
//# sourceMappingURL=execucao_formulario.module.js.map