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
var exame_medico_component_1 = require('./exame_medico.component');
var exame_medico_routing_1 = require('./exame_medico.routing');
var Exame_medicoModule = (function () {
    function Exame_medicoModule() {
    }
    Exame_medicoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, exame_medico_routing_1.exame_medico_routing, shared_module_1.SharedModule], declarations: [exame_medico_component_1.Exame_medicoComponent], exports: [exame_medico_component_1.Exame_medicoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Exame_medicoModule);
    return Exame_medicoModule;
}());
exports.Exame_medicoModule = Exame_medicoModule;
//# sourceMappingURL=exame_medico.module.js.map