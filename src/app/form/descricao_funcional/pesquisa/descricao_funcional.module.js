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
var descricao_funcional_component_1 = require('./descricao_funcional.component');
var descricao_funcional_routing_1 = require('./descricao_funcional.routing');
var Descricao_funcionalModule = (function () {
    function Descricao_funcionalModule() {
    }
    Descricao_funcionalModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, descricao_funcional_routing_1.descricao_funcional_routing, shared_module_1.SharedModule], declarations: [descricao_funcional_component_1.Descricao_funcionalComponent], exports: [descricao_funcional_component_1.Descricao_funcionalComponent] }), 
        __metadata('design:paramtypes', [])
    ], Descricao_funcionalModule);
    return Descricao_funcionalModule;
}());
exports.Descricao_funcionalModule = Descricao_funcionalModule;
//# sourceMappingURL=descricao_funcional.module.js.map