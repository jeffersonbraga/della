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
var indicador_customizado_dados_component_1 = require('./indicador_customizado_dados.component');
var indicador_customizado_dadosDetails_component_1 = require('./indicador_customizado_dadosDetails.component');
var indicador_customizado_dadosEdit_component_1 = require('./indicador_customizado_dadosEdit.component');
var shared_module_1 = require('../../../shared/shared.module');
var indicador_customizado_dados_routing_1 = require('./indicador_customizado_dados.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, indicador_customizado_dados_routing_1.indicador_customizado_dados_routing, shared_module_1.SharedModule], declarations: [indicador_customizado_dados_component_1.Indicador_customizadoDadosComponent, indicador_customizado_dadosDetails_component_1.Indicador_customizadoDadosDetailsComponent, indicador_customizado_dadosEdit_component_1.Indicador_customizadoDadosEditComponent] }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=indicador_customizado_dados.module.js.map