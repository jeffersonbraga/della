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
var pessoa_juridica_component_1 = require('./pessoa_juridica.component');
var pessoa_juridica_routing_1 = require('./pessoa_juridica.routing');
var Pessoa_juridicaModule = (function () {
    function Pessoa_juridicaModule() {
    }
    Pessoa_juridicaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, pessoa_juridica_routing_1.pessoa_juridica_routing, shared_module_1.SharedModule], declarations: [pessoa_juridica_component_1.Pessoa_juridicaComponent], exports: [pessoa_juridica_component_1.Pessoa_juridicaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Pessoa_juridicaModule);
    return Pessoa_juridicaModule;
}());
exports.Pessoa_juridicaModule = Pessoa_juridicaModule;
//# sourceMappingURL=pessoa_juridica.module.js.map