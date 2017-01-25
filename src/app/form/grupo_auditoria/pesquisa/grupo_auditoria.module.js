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
var grupo_auditoria_component_1 = require('./grupo_auditoria.component');
var grupo_auditoria_routing_1 = require('./grupo_auditoria.routing');
var Grupo_auditoriaModule = (function () {
    function Grupo_auditoriaModule() {
    }
    Grupo_auditoriaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, grupo_auditoria_routing_1.grupo_auditoria_routing, shared_module_1.SharedModule], declarations: [grupo_auditoria_component_1.Grupo_auditoriaComponent], exports: [grupo_auditoria_component_1.Grupo_auditoriaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Grupo_auditoriaModule);
    return Grupo_auditoriaModule;
}());
exports.Grupo_auditoriaModule = Grupo_auditoriaModule;
//# sourceMappingURL=grupo_auditoria.module.js.map