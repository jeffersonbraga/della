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
var config_impressao_component_1 = require('./config_impressao.component');
var config_impressao_routing_1 = require('./config_impressao.routing');
var Config_impressaoModule = (function () {
    function Config_impressaoModule() {
    }
    Config_impressaoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, config_impressao_routing_1.config_impressao_routing, shared_module_1.SharedModule], declarations: [config_impressao_component_1.Config_impressaoComponent], exports: [config_impressao_component_1.Config_impressaoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Config_impressaoModule);
    return Config_impressaoModule;
}());
exports.Config_impressaoModule = Config_impressaoModule;
//# sourceMappingURL=config_impressao.module.js.map