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
var doc_descritivo_treinamento_component_1 = require('./doc_descritivo_treinamento.component');
var doc_descritivo_treinamento_routing_1 = require('./doc_descritivo_treinamento.routing');
var Doc_descritivo_treinamentoModule = (function () {
    function Doc_descritivo_treinamentoModule() {
    }
    Doc_descritivo_treinamentoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, doc_descritivo_treinamento_routing_1.doc_descritivo_treinamento_routing, shared_module_1.SharedModule], declarations: [doc_descritivo_treinamento_component_1.Doc_descritivo_treinamentoComponent], exports: [doc_descritivo_treinamento_component_1.Doc_descritivo_treinamentoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Doc_descritivo_treinamentoModule);
    return Doc_descritivo_treinamentoModule;
}());
exports.Doc_descritivo_treinamentoModule = Doc_descritivo_treinamentoModule;
//# sourceMappingURL=doc_descritivo_treinamento.module.js.map