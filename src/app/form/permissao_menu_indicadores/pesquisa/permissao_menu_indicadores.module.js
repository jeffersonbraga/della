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
var permissao_menu_indicadores_component_1 = require('./permissao_menu_indicadores.component');
var permissao_menu_indicadores_routing_1 = require('./permissao_menu_indicadores.routing');
var Permissao_menu_indicadoresModule = (function () {
    function Permissao_menu_indicadoresModule() {
    }
    Permissao_menu_indicadoresModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, permissao_menu_indicadores_routing_1.permissao_menu_indicadores_routing, shared_module_1.SharedModule], declarations: [permissao_menu_indicadores_component_1.Permissao_menu_indicadoresComponent], exports: [permissao_menu_indicadores_component_1.Permissao_menu_indicadoresComponent] }), 
        __metadata('design:paramtypes', [])
    ], Permissao_menu_indicadoresModule);
    return Permissao_menu_indicadoresModule;
}());
exports.Permissao_menu_indicadoresModule = Permissao_menu_indicadoresModule;
//# sourceMappingURL=permissao_menu_indicadores.module.js.map