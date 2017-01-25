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
var proposta_candidato_component_1 = require('./proposta_candidato.component');
var proposta_candidato_routing_1 = require('./proposta_candidato.routing');
var Proposta_candidatoModule = (function () {
    function Proposta_candidatoModule() {
    }
    Proposta_candidatoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, proposta_candidato_routing_1.proposta_candidato_routing, shared_module_1.SharedModule], declarations: [proposta_candidato_component_1.Proposta_candidatoComponent], exports: [proposta_candidato_component_1.Proposta_candidatoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Proposta_candidatoModule);
    return Proposta_candidatoModule;
}());
exports.Proposta_candidatoModule = Proposta_candidatoModule;
//# sourceMappingURL=proposta_candidato.module.js.map