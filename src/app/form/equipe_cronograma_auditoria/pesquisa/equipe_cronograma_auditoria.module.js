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
var equipe_cronograma_auditoria_component_1 = require('./equipe_cronograma_auditoria.component');
var equipe_cronograma_auditoria_routing_1 = require('./equipe_cronograma_auditoria.routing');
var Equipe_cronograma_auditoriaModule = (function () {
    function Equipe_cronograma_auditoriaModule() {
    }
    Equipe_cronograma_auditoriaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, equipe_cronograma_auditoria_routing_1.equipe_cronograma_auditoria_routing, shared_module_1.SharedModule], declarations: [equipe_cronograma_auditoria_component_1.Equipe_cronograma_auditoriaComponent], exports: [equipe_cronograma_auditoria_component_1.Equipe_cronograma_auditoriaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Equipe_cronograma_auditoriaModule);
    return Equipe_cronograma_auditoriaModule;
}());
exports.Equipe_cronograma_auditoriaModule = Equipe_cronograma_auditoriaModule;
//# sourceMappingURL=equipe_cronograma_auditoria.module.js.map