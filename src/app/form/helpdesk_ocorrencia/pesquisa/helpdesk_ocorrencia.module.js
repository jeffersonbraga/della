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
var helpdesk_ocorrencia_component_1 = require('./helpdesk_ocorrencia.component');
var helpdesk_ocorrencia_routing_1 = require('./helpdesk_ocorrencia.routing');
var Helpdesk_ocorrenciaModule = (function () {
    function Helpdesk_ocorrenciaModule() {
    }
    Helpdesk_ocorrenciaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, helpdesk_ocorrencia_routing_1.helpdesk_ocorrencia_routing, shared_module_1.SharedModule], declarations: [helpdesk_ocorrencia_component_1.Helpdesk_ocorrenciaComponent], exports: [helpdesk_ocorrencia_component_1.Helpdesk_ocorrenciaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Helpdesk_ocorrenciaModule);
    return Helpdesk_ocorrenciaModule;
}());
exports.Helpdesk_ocorrenciaModule = Helpdesk_ocorrenciaModule;
//# sourceMappingURL=helpdesk_ocorrencia.module.js.map