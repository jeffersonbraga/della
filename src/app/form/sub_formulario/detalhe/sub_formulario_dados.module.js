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
var sub_formulario_dados_component_1 = require('./sub_formulario_dados.component');
var sub_formulario_dadosDetails_component_1 = require('./sub_formulario_dadosDetails.component');
var sub_formulario_dadosEdit_component_1 = require('./sub_formulario_dadosEdit.component');
var shared_module_1 = require('../../../shared/shared.module');
var sub_formulario_dados_routing_1 = require('./sub_formulario_dados.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, sub_formulario_dados_routing_1.sub_formulario_dados_routing, shared_module_1.SharedModule], declarations: [sub_formulario_dados_component_1.Sub_formularioDadosComponent, sub_formulario_dadosDetails_component_1.Sub_formularioDadosDetailsComponent, sub_formulario_dadosEdit_component_1.Sub_formularioDadosEditComponent] }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=sub_formulario_dados.module.js.map