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
var config_indicadores_component_1 = require('./config_indicadores.component');
var config_indicadores_routing_1 = require('./config_indicadores.routing');
var Config_indicadoresModule = (function () {
    function Config_indicadoresModule() {
    }
    Config_indicadoresModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, config_indicadores_routing_1.config_indicadores_routing, shared_module_1.SharedModule], declarations: [config_indicadores_component_1.Config_indicadoresComponent], exports: [config_indicadores_component_1.Config_indicadoresComponent] }), 
        __metadata('design:paramtypes', [])
    ], Config_indicadoresModule);
    return Config_indicadoresModule;
}());
exports.Config_indicadoresModule = Config_indicadoresModule;
//# sourceMappingURL=config_indicadores.module.js.map