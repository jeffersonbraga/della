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
var doc_revisao_formulario_component_1 = require('./doc_revisao_formulario.component');
var doc_revisao_formulario_routing_1 = require('./doc_revisao_formulario.routing');
var Doc_revisao_formularioModule = (function () {
    function Doc_revisao_formularioModule() {
    }
    Doc_revisao_formularioModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, doc_revisao_formulario_routing_1.doc_revisao_formulario_routing, shared_module_1.SharedModule], declarations: [doc_revisao_formulario_component_1.Doc_revisao_formularioComponent], exports: [doc_revisao_formulario_component_1.Doc_revisao_formularioComponent] }), 
        __metadata('design:paramtypes', [])
    ], Doc_revisao_formularioModule);
    return Doc_revisao_formularioModule;
}());
exports.Doc_revisao_formularioModule = Doc_revisao_formularioModule;
//# sourceMappingURL=doc_revisao_formulario.module.js.map