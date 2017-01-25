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
var router_1 = require('@angular/router');
var Grupo_usuario_1 = require('../../../modelo/Grupo_usuario');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Grupo_usuarioDadosDetailsComponent = (function () {
    function Grupo_usuarioDadosDetailsComponent(route, pesquisaService) {
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Grupo_usuarioDadosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.grupo_usuario.Grupo_usuario"; var id = +params['id']; _this.grupo_usuario = new Grupo_usuario_1.Grupo_usuario(); _this.grupo_usuario.cd_grupo_usuario = id; o.objetoJson = _this.grupo_usuario; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Grupo_usuarioDadosDetailsComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a grupo_usuario. ';
    } this.grupo_usuario = result; };
    Grupo_usuarioDadosDetailsComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Grupo_usuarioDadosDetailsComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'grupo_usuario-dados-details', templateUrl: 'grupo_usuario_dadosDetails.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Grupo_usuarioDadosDetailsComponent);
    return Grupo_usuarioDadosDetailsComponent;
}());
exports.Grupo_usuarioDadosDetailsComponent = Grupo_usuarioDadosDetailsComponent;
//# sourceMappingURL=grupo_usuario_dadosDetails.component.js.map