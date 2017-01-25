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
var shared_module_1 = require('../../shared/shared.module');
var mapa_calor_component_1 = require('./mapa_calor.component');
var mapa_calor_routing_1 = require('./mapa_calor.routing');
var Mapa_calorModule = (function () {
    function Mapa_calorModule() {
    }
    Mapa_calorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, mapa_calor_routing_1.mapa_calor_routing, shared_module_1.SharedModule],
            declarations: [mapa_calor_component_1.Mapa_calorComponent],
            exports: [mapa_calor_component_1.Mapa_calorComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Mapa_calorModule);
    return Mapa_calorModule;
}());
exports.Mapa_calorModule = Mapa_calorModule;
//# sourceMappingURL=mapa_calor.module.js.map