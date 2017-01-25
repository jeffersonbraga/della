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
var servico_component_1 = require('./servico.component');
var servico_routing_1 = require('./servico.routing');
var ServicoModule = (function () {
    function ServicoModule() {
    }
    ServicoModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, servico_routing_1.servico_routing, shared_module_1.SharedModule],
            declarations: [servico_component_1.ServicoComponent],
            exports: [servico_component_1.ServicoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ServicoModule);
    return ServicoModule;
}());
exports.ServicoModule = ServicoModule;
//# sourceMappingURL=servico.module.js.map