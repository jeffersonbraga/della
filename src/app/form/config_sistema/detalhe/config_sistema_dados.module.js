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
var config_sistema_dados_component_1 = require('./config_sistema_dados.component');
var config_sistema_dadosDetails_component_1 = require('./config_sistema_dadosDetails.component');
var config_sistema_dadosEdit_component_1 = require('./config_sistema_dadosEdit.component');
var shared_module_1 = require('../../../shared/shared.module');
var config_sistema_dados_routing_1 = require('./config_sistema_dados.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, config_sistema_dados_routing_1.config_sistema_dados_routing, shared_module_1.SharedModule], declarations: [config_sistema_dados_component_1.Config_sistemaDadosComponent, config_sistema_dadosDetails_component_1.Config_sistemaDadosDetailsComponent, config_sistema_dadosEdit_component_1.Config_sistemaDadosEditComponent] }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=config_sistema_dados.module.js.map