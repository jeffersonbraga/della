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
var tipo_notificacao_component_1 = require('./tipo_notificacao.component');
var tipo_notificacao_routing_1 = require('./tipo_notificacao.routing');
var Tipo_notificacaoModule = (function () {
    function Tipo_notificacaoModule() {
    }
    Tipo_notificacaoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, tipo_notificacao_routing_1.tipo_notificacao_routing, shared_module_1.SharedModule], declarations: [tipo_notificacao_component_1.Tipo_notificacaoComponent], exports: [tipo_notificacao_component_1.Tipo_notificacaoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Tipo_notificacaoModule);
    return Tipo_notificacaoModule;
}());
exports.Tipo_notificacaoModule = Tipo_notificacaoModule;
//# sourceMappingURL=tipo_notificacao.module.js.map