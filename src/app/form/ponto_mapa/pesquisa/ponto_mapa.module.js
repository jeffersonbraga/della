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
var ponto_mapa_component_1 = require('./ponto_mapa.component');
var ponto_mapa_routing_1 = require('./ponto_mapa.routing');
var Ponto_mapaModule = (function () {
    function Ponto_mapaModule() {
    }
    Ponto_mapaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, ponto_mapa_routing_1.ponto_mapa_routing, shared_module_1.SharedModule], declarations: [ponto_mapa_component_1.Ponto_mapaComponent], exports: [ponto_mapa_component_1.Ponto_mapaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Ponto_mapaModule);
    return Ponto_mapaModule;
}());
exports.Ponto_mapaModule = Ponto_mapaModule;
//# sourceMappingURL=ponto_mapa.module.js.map