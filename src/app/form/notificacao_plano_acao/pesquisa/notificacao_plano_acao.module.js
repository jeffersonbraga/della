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
var notificacao_plano_acao_component_1 = require('./notificacao_plano_acao.component');
var notificacao_plano_acao_routing_1 = require('./notificacao_plano_acao.routing');
var Notificacao_plano_acaoModule = (function () {
    function Notificacao_plano_acaoModule() {
    }
    Notificacao_plano_acaoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, notificacao_plano_acao_routing_1.notificacao_plano_acao_routing, shared_module_1.SharedModule], declarations: [notificacao_plano_acao_component_1.Notificacao_plano_acaoComponent], exports: [notificacao_plano_acao_component_1.Notificacao_plano_acaoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Notificacao_plano_acaoModule);
    return Notificacao_plano_acaoModule;
}());
exports.Notificacao_plano_acaoModule = Notificacao_plano_acaoModule;
//# sourceMappingURL=notificacao_plano_acao.module.js.map