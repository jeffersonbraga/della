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
var grupo_formulario_component_1 = require('./grupo_formulario.component');
var grupo_formulario_routing_1 = require('./grupo_formulario.routing');
var Grupo_formularioModule = (function () {
    function Grupo_formularioModule() {
    }
    Grupo_formularioModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, grupo_formulario_routing_1.grupo_formulario_routing, shared_module_1.SharedModule], declarations: [grupo_formulario_component_1.Grupo_formularioComponent], exports: [grupo_formulario_component_1.Grupo_formularioComponent] }), 
        __metadata('design:paramtypes', [])
    ], Grupo_formularioModule);
    return Grupo_formularioModule;
}());
exports.Grupo_formularioModule = Grupo_formularioModule;
//# sourceMappingURL=grupo_formulario.module.js.map