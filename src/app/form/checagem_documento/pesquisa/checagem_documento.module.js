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
var checagem_documento_component_1 = require('./checagem_documento.component');
var checagem_documento_routing_1 = require('./checagem_documento.routing');
var Checagem_documentoModule = (function () {
    function Checagem_documentoModule() {
    }
    Checagem_documentoModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, checagem_documento_routing_1.checagem_documento_routing, shared_module_1.SharedModule], declarations: [checagem_documento_component_1.Checagem_documentoComponent], exports: [checagem_documento_component_1.Checagem_documentoComponent] }), 
        __metadata('design:paramtypes', [])
    ], Checagem_documentoModule);
    return Checagem_documentoModule;
}());
exports.Checagem_documentoModule = Checagem_documentoModule;
//# sourceMappingURL=checagem_documento.module.js.map