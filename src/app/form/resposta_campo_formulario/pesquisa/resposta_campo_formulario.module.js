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
var resposta_campo_formulario_component_1 = require('./resposta_campo_formulario.component');
var resposta_campo_formulario_routing_1 = require('./resposta_campo_formulario.routing');
var Resposta_campo_formularioModule = (function () {
    function Resposta_campo_formularioModule() {
    }
    Resposta_campo_formularioModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, resposta_campo_formulario_routing_1.resposta_campo_formulario_routing, shared_module_1.SharedModule], declarations: [resposta_campo_formulario_component_1.Resposta_campo_formularioComponent], exports: [resposta_campo_formulario_component_1.Resposta_campo_formularioComponent] }), 
        __metadata('design:paramtypes', [])
    ], Resposta_campo_formularioModule);
    return Resposta_campo_formularioModule;
}());
exports.Resposta_campo_formularioModule = Resposta_campo_formularioModule;
//# sourceMappingURL=resposta_campo_formulario.module.js.map