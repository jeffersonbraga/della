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
var campo_agrupador_component_1 = require('./campo_agrupador.component');
var campo_agrupador_routing_1 = require('./campo_agrupador.routing');
var Campo_agrupadorModule = (function () {
    function Campo_agrupadorModule() {
    }
    Campo_agrupadorModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, campo_agrupador_routing_1.campo_agrupador_routing, shared_module_1.SharedModule], declarations: [campo_agrupador_component_1.Campo_agrupadorComponent], exports: [campo_agrupador_component_1.Campo_agrupadorComponent] }), 
        __metadata('design:paramtypes', [])
    ], Campo_agrupadorModule);
    return Campo_agrupadorModule;
}());
exports.Campo_agrupadorModule = Campo_agrupadorModule;
//# sourceMappingURL=campo_agrupador.module.js.map