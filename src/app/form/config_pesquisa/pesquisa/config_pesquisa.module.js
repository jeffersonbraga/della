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
var config_pesquisa_component_1 = require('./config_pesquisa.component');
var config_pesquisa_routing_1 = require('./config_pesquisa.routing');
var Config_pesquisaModule = (function () {
    function Config_pesquisaModule() {
    }
    Config_pesquisaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, config_pesquisa_routing_1.config_pesquisa_routing, shared_module_1.SharedModule], declarations: [config_pesquisa_component_1.Config_pesquisaComponent], exports: [config_pesquisa_component_1.Config_pesquisaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Config_pesquisaModule);
    return Config_pesquisaModule;
}());
exports.Config_pesquisaModule = Config_pesquisaModule;
//# sourceMappingURL=config_pesquisa.module.js.map