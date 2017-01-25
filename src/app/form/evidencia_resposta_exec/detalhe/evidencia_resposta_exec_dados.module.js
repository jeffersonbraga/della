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
var evidencia_resposta_exec_dados_component_1 = require('./evidencia_resposta_exec_dados.component');
var evidencia_resposta_exec_dadosDetails_component_1 = require('./evidencia_resposta_exec_dadosDetails.component');
var evidencia_resposta_exec_dadosEdit_component_1 = require('./evidencia_resposta_exec_dadosEdit.component');
var shared_module_1 = require('../../../shared/shared.module');
var evidencia_resposta_exec_dados_routing_1 = require('./evidencia_resposta_exec_dados.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, evidencia_resposta_exec_dados_routing_1.evidencia_resposta_exec_dados_routing, shared_module_1.SharedModule], declarations: [evidencia_resposta_exec_dados_component_1.Evidencia_resposta_execDadosComponent, evidencia_resposta_exec_dadosDetails_component_1.Evidencia_resposta_execDadosDetailsComponent, evidencia_resposta_exec_dadosEdit_component_1.Evidencia_resposta_execDadosEditComponent] }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=evidencia_resposta_exec_dados.module.js.map