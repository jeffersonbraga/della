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
var resposta_exec_auditoria_component_1 = require('./resposta_exec_auditoria.component');
var resposta_exec_auditoria_routing_1 = require('./resposta_exec_auditoria.routing');
var Resposta_exec_auditoriaModule = (function () {
    function Resposta_exec_auditoriaModule() {
    }
    Resposta_exec_auditoriaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, resposta_exec_auditoria_routing_1.resposta_exec_auditoria_routing, shared_module_1.SharedModule], declarations: [resposta_exec_auditoria_component_1.Resposta_exec_auditoriaComponent], exports: [resposta_exec_auditoria_component_1.Resposta_exec_auditoriaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Resposta_exec_auditoriaModule);
    return Resposta_exec_auditoriaModule;
}());
exports.Resposta_exec_auditoriaModule = Resposta_exec_auditoriaModule;
//# sourceMappingURL=resposta_exec_auditoria.module.js.map