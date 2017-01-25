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
var pessoa_juridica_dados_component_1 = require('./pessoa_juridica_dados.component');
var pessoa_juridica_dadosDetails_component_1 = require('./pessoa_juridica_dadosDetails.component');
var pessoa_juridica_dadosEdit_component_1 = require('./pessoa_juridica_dadosEdit.component');
var shared_module_1 = require('../../../shared/shared.module');
var pessoa_juridica_dados_routing_1 = require('./pessoa_juridica_dados.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, pessoa_juridica_dados_routing_1.pessoa_juridica_dados_routing, shared_module_1.SharedModule], declarations: [pessoa_juridica_dados_component_1.Pessoa_juridicaDadosComponent, pessoa_juridica_dadosDetails_component_1.Pessoa_juridicaDadosDetailsComponent, pessoa_juridica_dadosEdit_component_1.Pessoa_juridicaDadosEditComponent] }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=pessoa_juridica_dados.module.js.map