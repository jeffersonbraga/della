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
var permissao_acesso_component_1 = require('./permissao_acesso.component');
var permissao_acesso_routing_1 = require('./permissao_acesso.routing');
var Permissao_acessoModule = (function () {
    function Permissao_acessoModule() {
    }
    Permissao_acessoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, permissao_acesso_routing_1.permissao_acesso_routing, shared_module_1.SharedModule], declarations: [permissao_acesso_component_1.Permissao_acessoComponent], exports: [permissao_acesso_component_1.Permissao_acessoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Permissao_acessoModule);
    return Permissao_acessoModule;
}());
exports.Permissao_acessoModule = Permissao_acessoModule;
//# sourceMappingURL=permissao_acesso.module.js.map