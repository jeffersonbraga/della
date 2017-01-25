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
var categoria_ishikawa_component_1 = require('./categoria_ishikawa.component');
var categoria_ishikawa_routing_1 = require('./categoria_ishikawa.routing');
var Categoria_ishikawaModule = (function () {
    function Categoria_ishikawaModule() {
    }
    Categoria_ishikawaModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, categoria_ishikawa_routing_1.categoria_ishikawa_routing, shared_module_1.SharedModule], declarations: [categoria_ishikawa_component_1.Categoria_ishikawaComponent], exports: [categoria_ishikawa_component_1.Categoria_ishikawaComponent] }), 
        __metadata('design:paramtypes', [])
    ], Categoria_ishikawaModule);
    return Categoria_ishikawaModule;
}());
exports.Categoria_ishikawaModule = Categoria_ishikawaModule;
//# sourceMappingURL=categoria_ishikawa.module.js.map