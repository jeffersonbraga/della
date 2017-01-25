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
var plano_acao_hp_component_1 = require('./plano_acao_hp.component');
var plano_acao_hp_routing_1 = require('./plano_acao_hp.routing');
var Plano_acao_hpModule = (function () {
    function Plano_acao_hpModule() {
    }
    Plano_acao_hpModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, plano_acao_hp_routing_1.plano_acao_hp_routing, shared_module_1.SharedModule], declarations: [plano_acao_hp_component_1.Plano_acao_hpComponent], exports: [plano_acao_hp_component_1.Plano_acao_hpComponent] }), 
        __metadata('design:paramtypes', [])
    ], Plano_acao_hpModule);
    return Plano_acao_hpModule;
}());
exports.Plano_acao_hpModule = Plano_acao_hpModule;
//# sourceMappingURL=plano_acao_hp.module.js.map