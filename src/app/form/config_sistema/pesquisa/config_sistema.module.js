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
var config_sistema_component_1 = require('./config_sistema.component');
var config_sistema_routing_1 = require('./config_sistema.routing');
var Config_sistemaModule = (function () {
    function Config_sistemaModule() {
    }
    Config_sistemaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, config_sistema_routing_1.config_sistema_routing, shared_module_1.SharedModule], declarations: [config_sistema_component_1.Config_sistemaComponent], exports: [config_sistema_component_1.Config_sistemaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Config_sistemaModule);
    return Config_sistemaModule;
}());
exports.Config_sistemaModule = Config_sistemaModule;
//# sourceMappingURL=config_sistema.module.js.map