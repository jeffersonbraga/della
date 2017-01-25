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
var faixa_class_auditoria_dados_component_1 = require('./faixa_class_auditoria_dados.component');
var faixa_class_auditoria_dadosDetails_component_1 = require('./faixa_class_auditoria_dadosDetails.component');
var faixa_class_auditoria_dadosEdit_component_1 = require('./faixa_class_auditoria_dadosEdit.component');
var shared_module_1 = require('../../../shared/shared.module');
var faixa_class_auditoria_dados_routing_1 = require('./faixa_class_auditoria_dados.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, faixa_class_auditoria_dados_routing_1.faixa_class_auditoria_dados_routing, shared_module_1.SharedModule], declarations: [faixa_class_auditoria_dados_component_1.Faixa_class_auditoriaDadosComponent, faixa_class_auditoria_dadosDetails_component_1.Faixa_class_auditoriaDadosDetailsComponent, faixa_class_auditoria_dadosEdit_component_1.Faixa_class_auditoriaDadosEditComponent] }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=faixa_class_auditoria_dados.module.js.map