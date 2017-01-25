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
var acao_preventiva_pa_dados_component_1 = require('./acao_preventiva_pa_dados.component');
var acao_preventiva_pa_dadosDetails_component_1 = require('./acao_preventiva_pa_dadosDetails.component');
var acao_preventiva_pa_dadosEdit_component_1 = require('./acao_preventiva_pa_dadosEdit.component');
var shared_module_1 = require('../../../shared/shared.module');
var acao_preventiva_pa_dados_routing_1 = require('./acao_preventiva_pa_dados.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, acao_preventiva_pa_dados_routing_1.acao_preventiva_pa_dados_routing, shared_module_1.SharedModule], declarations: [acao_preventiva_pa_dados_component_1.Acao_preventiva_paDadosComponent, acao_preventiva_pa_dadosDetails_component_1.Acao_preventiva_paDadosDetailsComponent, acao_preventiva_pa_dadosEdit_component_1.Acao_preventiva_paDadosEditComponent] }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=acao_preventiva_pa_dados.module.js.map