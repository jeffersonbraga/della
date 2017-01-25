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
var lista_modulos_component_1 = require('./lista_modulos.component');
var lista_modulos_routing_1 = require('./lista_modulos.routing');
var Lista_modulosModule = (function () {
    function Lista_modulosModule() {
    }
    Lista_modulosModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, lista_modulos_routing_1.lista_modulos_routing, shared_module_1.SharedModule], declarations: [lista_modulos_component_1.Lista_modulosComponent], exports: [lista_modulos_component_1.Lista_modulosComponent] }), 
        __metadata('design:paramtypes', [])
    ], Lista_modulosModule);
    return Lista_modulosModule;
}());
exports.Lista_modulosModule = Lista_modulosModule;
//# sourceMappingURL=lista_modulos.module.js.map