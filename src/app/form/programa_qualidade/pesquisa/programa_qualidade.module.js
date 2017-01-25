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
var programa_qualidade_component_1 = require('./programa_qualidade.component');
var programa_qualidade_routing_1 = require('./programa_qualidade.routing');
var Programa_qualidadeModule = (function () {
    function Programa_qualidadeModule() {
    }
    Programa_qualidadeModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, programa_qualidade_routing_1.programa_qualidade_routing, shared_module_1.SharedModule], declarations: [programa_qualidade_component_1.Programa_qualidadeComponent], exports: [programa_qualidade_component_1.Programa_qualidadeComponent] }), 
        __metadata('design:paramtypes', [])
    ], Programa_qualidadeModule);
    return Programa_qualidadeModule;
}());
exports.Programa_qualidadeModule = Programa_qualidadeModule;
//# sourceMappingURL=programa_qualidade.module.js.map