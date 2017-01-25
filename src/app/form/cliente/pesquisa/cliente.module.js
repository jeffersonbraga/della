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
var cliente_component_1 = require('./cliente.component');
var cliente_routing_1 = require('./cliente.routing');
var ClienteModule = (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, cliente_routing_1.cliente_routing, shared_module_1.SharedModule], declarations: [cliente_component_1.ClienteComponent], exports: [cliente_component_1.ClienteComponent] }), 
        __metadata('design:paramtypes', [])
    ], ClienteModule);
    return ClienteModule;
}());
exports.ClienteModule = ClienteModule;
//# sourceMappingURL=cliente.module.js.map