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
var avaliacao_ideia_component_1 = require('./avaliacao_ideia.component');
var avaliacao_ideia_routing_1 = require('./avaliacao_ideia.routing');
var Avaliacao_ideiaModule = (function () {
    function Avaliacao_ideiaModule() {
    }
    Avaliacao_ideiaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, avaliacao_ideia_routing_1.avaliacao_ideia_routing, shared_module_1.SharedModule], declarations: [avaliacao_ideia_component_1.Avaliacao_ideiaComponent], exports: [avaliacao_ideia_component_1.Avaliacao_ideiaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Avaliacao_ideiaModule);
    return Avaliacao_ideiaModule;
}());
exports.Avaliacao_ideiaModule = Avaliacao_ideiaModule;
//# sourceMappingURL=avaliacao_ideia.module.js.map