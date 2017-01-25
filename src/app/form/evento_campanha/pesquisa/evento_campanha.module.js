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
var evento_campanha_component_1 = require('./evento_campanha.component');
var evento_campanha_routing_1 = require('./evento_campanha.routing');
var Evento_campanhaModule = (function () {
    function Evento_campanhaModule() {
    }
    Evento_campanhaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, evento_campanha_routing_1.evento_campanha_routing, shared_module_1.SharedModule], declarations: [evento_campanha_component_1.Evento_campanhaComponent], exports: [evento_campanha_component_1.Evento_campanhaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Evento_campanhaModule);
    return Evento_campanhaModule;
}());
exports.Evento_campanhaModule = Evento_campanhaModule;
//# sourceMappingURL=evento_campanha.module.js.map