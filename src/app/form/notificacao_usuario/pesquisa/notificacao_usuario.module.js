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
var notificacao_usuario_component_1 = require('./notificacao_usuario.component');
var notificacao_usuario_routing_1 = require('./notificacao_usuario.routing');
var Notificacao_usuarioModule = (function () {
    function Notificacao_usuarioModule() {
    }
    Notificacao_usuarioModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, notificacao_usuario_routing_1.notificacao_usuario_routing, shared_module_1.SharedModule], declarations: [notificacao_usuario_component_1.Notificacao_usuarioComponent], exports: [notificacao_usuario_component_1.Notificacao_usuarioComponent] }), 
        __metadata('design:paramtypes', [])
    ], Notificacao_usuarioModule);
    return Notificacao_usuarioModule;
}());
exports.Notificacao_usuarioModule = Notificacao_usuarioModule;
//# sourceMappingURL=notificacao_usuario.module.js.map