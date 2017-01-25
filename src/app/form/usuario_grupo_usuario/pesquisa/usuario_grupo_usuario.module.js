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
var usuario_grupo_usuario_component_1 = require('./usuario_grupo_usuario.component');
var usuario_grupo_usuario_routing_1 = require('./usuario_grupo_usuario.routing');
var Usuario_grupo_usuarioModule = (function () {
    function Usuario_grupo_usuarioModule() {
    }
    Usuario_grupo_usuarioModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, usuario_grupo_usuario_routing_1.usuario_grupo_usuario_routing, shared_module_1.SharedModule], declarations: [usuario_grupo_usuario_component_1.Usuario_grupo_usuarioComponent], exports: [usuario_grupo_usuario_component_1.Usuario_grupo_usuarioComponent] }), 
        __metadata('design:paramtypes', [])
    ], Usuario_grupo_usuarioModule);
    return Usuario_grupo_usuarioModule;
}());
exports.Usuario_grupo_usuarioModule = Usuario_grupo_usuarioModule;
//# sourceMappingURL=usuario_grupo_usuario.module.js.map