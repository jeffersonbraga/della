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
var acao_plano_acao_hp_component_1 = require('./acao_plano_acao_hp.component');
var acao_plano_acao_hp_routing_1 = require('./acao_plano_acao_hp.routing');
var Acao_plano_acao_hpModule = (function () {
    function Acao_plano_acao_hpModule() {
    }
    Acao_plano_acao_hpModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, acao_plano_acao_hp_routing_1.acao_plano_acao_hp_routing, shared_module_1.SharedModule], declarations: [acao_plano_acao_hp_component_1.Acao_plano_acao_hpComponent], exports: [acao_plano_acao_hp_component_1.Acao_plano_acao_hpComponent] }), 
        __metadata('design:paramtypes', [])
    ], Acao_plano_acao_hpModule);
    return Acao_plano_acao_hpModule;
}());
exports.Acao_plano_acao_hpModule = Acao_plano_acao_hpModule;
//# sourceMappingURL=acao_plano_acao_hp.module.js.map